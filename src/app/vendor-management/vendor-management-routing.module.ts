import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorComponent } from './vendor/vendor.component';
import { VendorManagementComponent } from './vendor-management.component';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { VendorWorkflowComponent } from './vendor/vendor-workflow/vendor-workflow.component';

const routes: Routes = [
  { 
    path: '', 
    component: VendorManagementComponent, 
    children: [
      { path: '', component: VendorComponent, data: { title: 'Vendors' } },
      { path: 'workflow-detail/:id', component: VendorWorkflowComponent, data: { title: 'Vendor Workflow' } },
      { path: 'create-vendor', component: CreateVendorComponent, data: { title: 'Create Vendor' } }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
