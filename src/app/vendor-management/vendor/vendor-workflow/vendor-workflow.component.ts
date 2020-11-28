import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, AuthService, VendorsService, WorkflowService } from './../../../_serviceProvider/services';

@Component({
  selector: 'app-vendor-workflow',
  templateUrl: './vendor-workflow.component.html',
  styleUrls: ['./vendor-workflow.component.sass']
})
export class VendorWorkflowComponent implements OnInit {

  public _vendorData: any;
  public _level: number = 1;
  public _currUser: string = "";
  public _showWorkflow: boolean = false;
  public _actions: Array<string> = ["--", "Approve", "Reject", "Reject & Remove from workflow"];
  public _finalResult: string;

  public statusLog = [];
  
  private _workflowData: any;
  private vendor_id: string;

  constructor( 
    private _alert: AlertService,
    private _auth: AuthService, 
    private _vendorProvider: VendorsService, 
    private _activatedRoute: ActivatedRoute, 
    private _workflowProvider: WorkflowService 
  ) { 
    this.vendor_id = this._activatedRoute.snapshot.paramMap.get("id");
    this._currUser = this._auth.getIdentity();
    if( this.vendor_id ) {
      this._vendorProvider.getVendor(this.vendor_id).subscribe(response => {
        if( !response.error ) {
          this._vendorData = response.data;
          this.fetchWorkflow();
        }
      });
    }
  }

  ngOnInit(): void { }

  fetchWorkflow(): void {
    let access: boolean = true;
    this._workflowProvider.getWorklog(this.vendor_id).subscribe(response => {
      if( !response.error ) {
        let preLog = { type_of_approval: "Sequential Approvals", type: "sequential", approvers: [] };
        this.statusLog = [];
        this._vendorData.sequential_approvers.forEach(element => {
          let obj: any = { _id: element._id, user: element.full_name, approval_action: "--", workflow_status: "--", access: access };
          this._workflowData = response.data;
          if( response.data.length > 0 ) {
            var tmp = this.verifyApproverAction('sequential', element._id);
            if( tmp.length > 0 ) {
              access = true;
              obj.access = access;
              obj.approval_action = tmp[0].approval_action;
              obj.workflow_status = tmp[0].workflow_status;
            }
          } else {
            access = false;
          }
          preLog.approvers.push(obj);
        });
        this.statusLog.push(preLog)
        this._showWorkflow = true;
        if( response.data.length > 0 ) {
          let sequenceEndRow = this.statusLog[0].approvers[this.statusLog[0].approvers.length - 1];
          this.prepareLog( sequenceEndRow.approval_action, sequenceEndRow.workflow_status );
        }
      }
    });
  }

  prepareLog(approval_action, workflow_status): void {
    let preLog: any = { type_of_approval: "", type: "", approvers: [] };

    if( approval_action !== "--" ) {
      if(approval_action === "Approve") {
        preLog.type_of_approval = "Round-robin Approvals";
        preLog.type = "round-robin";
        this._vendorData.round_robin_approvers.forEach(element => {
          let obj: any = { _id: element._id, user: element.full_name, approval_action: "--", workflow_status: workflow_status, access: true };
          if( this._workflowData.length > 0 ) {
            var tmp = this.verifyApproverAction('round-robin', element._id);
            if( tmp.length > 0 ) {
              obj.approval_action = tmp[0].approval_action;
              obj.workflow_status = tmp[0].workflow_status;
            }
          }
          preLog.approvers.push(obj);
        });
      } else {
        let access: boolean = true;
        preLog.type_of_approval = "Any One Approvals";
        preLog.type = "any-one";
        this._vendorData.any_one_approvers.forEach(element => {
          let obj: any = { _id: element._id, user: element.full_name, approval_action: "--", workflow_status: workflow_status, access: access };
          if( this._workflowData.length > 0 ) {
            var tmp = this.verifyApproverAction('any-one', element._id);
            if( tmp.length > 0 ) {
              access = !access;
              obj.approval_action = tmp[0].approval_action;
              obj.workflow_status = tmp[0].workflow_status;
            }
          }
          preLog.approvers.push(obj);
        });
        preLog.approvers.forEach(element => {
          element.access = access;
        });
      }
  
      this.statusLog.push(preLog);
      if( preLog.type === "round-robin" ) {
        let sequenceEndRow = this.statusLog[this.statusLog.length - 1].approvers[this.statusLog[this.statusLog.length - 1].approvers.length - 1];
        if( sequenceEndRow.approval_action === "Approve" ) {
          let final = this.statusLog[this.statusLog.length - 1].approvers.every(element => {
            return element.approval_action === "Approve" ? true : false;
          });
          if( final ) {
            this._finalResult = "Final Result: This workflow was executed successfully.";
            this.updateStatus();
          }
        } else if( sequenceEndRow.approval_action === "Reject" ) {
          this._finalResult = "Final Result: This workflow was terminated.";
          this.updateStatus();
        } else if( sequenceEndRow.approval_action === "Reject & Remove from workflow" ) {
          this.prepareLog( sequenceEndRow.approval_action, sequenceEndRow.workflow_status );
        }
      } else if( preLog.type === "any-one" ) {
        let final = this.statusLog[this.statusLog.length - 1].approvers.some(element => {
          return element.approval_action === "Approve" ? true : false;
        });
        if( final ) {
          this.prepareLog( "Approve", "Active" );
        }
      }
    }
  }

  verifyApproverAction(type_of_approval: string, _id: string ): any {
    const data = this._workflowData.filter(element => {
      return element.user_id === _id && element.type_of_approval === type_of_approval;
    });

    return data;
  }

  updateLog( event: any, type_of_approval: string ): void {
    const log = {
      vendor_id:        this.vendor_id,
      user_id:          this._currUser,
      type_of_approval: type_of_approval,
      approval_action:  event.target.value,
      workflow_status:  ( event.target.value === "Reject" ) ? 'Terminated' : 'Active'
    }

    this._workflowProvider.submitWorklog(log).subscribe(response => {
      if( !response.error )
        this.fetchWorkflow();
    });
  }

  updateStatus(): void {
    if( this._vendorData.workflow_status === "" ) {
      this._vendorProvider.updateVendor(this._vendorData._id, { workflow_status: this._finalResult }).subscribe(response => {
        if( !response.error )
          this._alert.success(response.message)
      });
    }
  }

}
