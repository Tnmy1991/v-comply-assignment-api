!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}(self.webpackChunkassignment_ui=self.webpackChunkassignment_ui||[]).push([[345],{2345:function(r,a,n){"use strict";n.r(a),n.d(a,{UserManagementModule:function(){return w}});var i=n(9153),o=n(4577),l=n(9582),u=n(3606),s=n(8370),c=n(3534),d=n(2870),p=n(6274);function f(e,r){if(1&e&&(u.TgZ(0,"div",1),u.TgZ(1,"div",2),u.TgZ(2,"div",3),u.TgZ(3,"div",4),u.TgZ(4,"div",5),u._uU(5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",6),u.TgZ(7,"div",7),u.TgZ(8,"p",8),u._uU(9,"User Information"),u.qZA(),u.qZA(),u.TgZ(10,"div",9),u.TgZ(11,"ul",10),u.TgZ(12,"li"),u.TgZ(13,"p",11),u._uU(14,"User ID"),u.qZA(),u.TgZ(15,"p",12),u._uU(16),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(17,"div",9),u.TgZ(18,"ul",10),u.TgZ(19,"li"),u.TgZ(20,"p",11),u._uU(21,"Full Name"),u.qZA(),u.TgZ(22,"p",12),u._uU(23),u.qZA(),u.qZA(),u.TgZ(24,"li"),u.TgZ(25,"p",11),u._uU(26,"Role"),u.qZA(),u.TgZ(27,"p",13),u._uU(28),u.ALo(29,"titlecase"),u.qZA(),u.qZA(),u.TgZ(30,"li"),u.TgZ(31,"p",11),u._uU(32,"Created On"),u.qZA(),u.TgZ(33,"p",12),u._uU(34),u.ALo(35,"date"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e){var t=u.oxw();u.xp6(5),u.Oqu(t.user_tag),u.xp6(11),u.Oqu(t.user_detail._id),u.xp6(7),u.Oqu(t.user_detail.full_name),u.xp6(5),u.Oqu(u.lcZ(29,5,t.user_detail.role)),u.xp6(6),u.Oqu(u.xi3(35,7,t.user_detail.created_at,"medium"))}}var Z=function(){var r=function(){function r(){e(this,r),this.user_tag="",this._reInitialize=new l.xQ}return t(r,[{key:"ngOnInit",value:function(){var e=this;this._reInitialize.subscribe(function(r){if(r){e.user_detail=r;var t=r.full_name.split(" ");e.user_tag=t.length>1?"".concat(t[0].charAt(0)).concat(t[1].charAt(0)):"".concat(t[0].charAt(0))}})}}]),r}();return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-user-detail"]],inputs:{_reInitialize:"_reInitialize"},decls:1,vars:1,consts:[["class","data-container",4,"ngIf"],[1,"data-container"],[1,"row"],[1,"col-md-3","col-sm-12","text-center","col-no-padding"],[1,"display-picture"],[1,"rounded-circle","avatar-xl","default-dp"],[1,"col-md-9","col-sm-12","col-no-padding"],[1,"section-wrapper","mb-4"],[1,"section-heading"],[1,"col-sm-12","mb-4","col-no-padding"],[1,"meta-data-list"],[1,"label"],[1,"main-menu"],[1,"main-menu","highlight"]],template:function(e,r){1&e&&u.YNc(0,f,36,10,"div",0),2&e&&u.Q6J("ngIf",r.user_detail)},directives:[p.O5],pipes:[p.rS,p.uU],styles:[""]}),r}();function m(e,r){if(1&e){var t=u.EpF();u.TgZ(0,"tr",10),u.NdJ("click",function(){var e=u.CHM(t).$implicit;return u.oxw().showDetails(e)}),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.ALo(7,"titlecase"),u.qZA(),u.TgZ(8,"td"),u._uU(9),u.ALo(10,"date"),u.qZA(),u.qZA()}if(2&e){var a=r.$implicit,n=r.index;u.xp6(2),u.Oqu(n+1),u.xp6(2),u.Oqu(a.full_name),u.xp6(2),u.Oqu(u.lcZ(7,4,a.role)),u.xp6(3),u.Oqu(u.xi3(10,6,a.created_at,"medium"))}}var g,_,q=function(){var r=function(){function r(t){e(this,r),this._userProvider=t,this.reInitialize=new l.xQ,this.headerArray=[{label:"Sl No.",additional_class:"sl_no"},{label:"Full Name",additional_class:""},{label:"Role",additional_class:""},{label:"Created On",additional_class:""}]}return t(r,[{key:"ngOnInit",value:function(){}},{key:"handleEmitterData",value:function(e){this.usersList=e,this.showDetails(e[0])}},{key:"showDetails",value:function(e){this.reInitialize.next(e)}}]),r}();return r.\u0275fac=function(e){return new(e||r)(u.Y36(s.fz))},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-users"]],decls:14,vars:5,consts:[["header","",1,"card-header"],["routerLink","/portal/application/users/create-user",1,"btn","btn-with-icon"],[1,"mdi","mdi-plus","mr-2"],["body","",1,"card-body"],[1,"row"],[1,"col-md-4","col-sm-12","col-no-padding"],[3,"_id","_header","_serviceObject","_reocords"],["ngFor","",3,"ngForOf"],[1,"col-md-8","col-sm-12","col-no-padding","col-divider"],[3,"_reInitialize"],[3,"click"]],template:function(e,r){1&e&&(u.TgZ(0,"app-ui-card"),u.TgZ(1,"div",0),u.TgZ(2,"h3"),u._uU(3,"Users"),u.qZA(),u.TgZ(4,"a",1),u._UZ(5,"i",2),u._uU(6," Create User"),u.qZA(),u.qZA(),u.TgZ(7,"div",3),u.TgZ(8,"div",4),u.TgZ(9,"div",5),u.TgZ(10,"app-ui-datatable",6),u.NdJ("_reocords",function(e){return r.handleEmitterData(e)}),u.YNc(11,m,11,9,"ng-template",7),u.qZA(),u.qZA(),u.TgZ(12,"div",8),u._UZ(13,"app-user-detail",9),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(10),u.Q6J("_id","users-table")("_header",r.headerArray)("_serviceObject",r._userProvider),u.xp6(1),u.Q6J("ngForOf",r.usersList),u.xp6(2),u.Q6J("_reInitialize",r.reInitialize.asObservable()))},directives:[c.A,o.yS,d.n,p.sg,Z],pipes:[p.rS,p.uU],styles:[""]}),r}(),v=n(9409),A=function(){var r=function(){function r(){e(this,r)}return t(r,[{key:"ngOnInit",value:function(){}}]),r}();return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-user-management"]],decls:2,vars:0,template:function(e,r){1&e&&(u.TgZ(0,"app-ui-wrapper"),u._UZ(1,"router-outlet"),u.qZA())},directives:[v.A,o.lC],styles:[""]}),r}(),h=n(4988),T=function(){var r=function(){function r(t,a){e(this,r),this._userProvider=t,this._router=a,this.formGroup=new h.cw({role:new h.NI(""),password:new h.NI(""),username:new h.NI(""),full_name:new h.NI(""),confirm_password:new h.NI("enabled")})}return t(r,[{key:"ngAfterViewInit",value:function(){this._formData&&this.formGroup.patchValue({role:this._formData.role,username:this._formData.username,full_name:this._formData.full_name})}},{key:"validateForm",value:function(){var e=this;$("#user-form").parsley().validate({group:"fieldset-0"})&&this._userProvider.createRequest(this.formGroup.value).subscribe(function(r){r.error||e._router.navigate(["/portal/application/users"])})}},{key:"cancelForm",value:function(){$("#user-form").parsley().reset(),this.formGroup.reset()}}]),r}();return r.\u0275fac=function(e){return new(e||r)(u.Y36(s.fz),u.Y36(o.F0))},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-user-form"]],inputs:{_formData:"_formData",_btnLabel:"_btnLabel"},decls:37,vars:2,consts:[["id","user-form","autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-md-7","col-sm-12","form-container"],[1,"section-wrapper","mb-6"],[1,"section-heading"],[1,"form-row"],[1,"form-group","col-md-4"],["for","full_name",1,"label","required"],["type","text","id","full_name","formControlName","full_name","placeholder","Enter Full Name","data-parsley-required","true","data-parsley-group","fieldset-0",1,"form-control"],["for","role",1,"label","required"],["id","role","formControlName","role","data-parsley-required","true","data-parsley-group","fieldset-0",1,"form-control","custom-select"],["value",""],["value","approvers"],[1,"form-row","mb-8"],["for","username",1,"label","required"],["type","text","id","username","formControlName","username","placeholder","Enter Username","data-parsley-required","true","data-parsley-group","fieldset-0",1,"form-control"],["for","password",1,"label","required"],["type","password","id","password","formControlName","password","placeholder","Enter Password","data-parsley-required","true","data-parsley-group","fieldset-0",1,"form-control"],["for","confirm_password",1,"label","required"],["type","password","id","confirm_password","formControlName","confirm_password","placeholder","Re-type Password","data-parsley-required","true","data-parsley-group","fieldset-0","data-parsley-equalto","#password",1,"form-control"],[1,"text-right"],["type","button",1,"btn","btn-primary","mr-5px",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(e,r){1&e&&(u.TgZ(0,"form",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"div",3),u.TgZ(4,"p",4),u._uU(5,"User Information"),u.qZA(),u.qZA(),u.TgZ(6,"div",5),u.TgZ(7,"div",6),u.TgZ(8,"label",7),u._uU(9,"Full Name"),u.qZA(),u._UZ(10,"input",8),u.qZA(),u.TgZ(11,"div",6),u.TgZ(12,"label",9),u._uU(13,"Role"),u.qZA(),u.TgZ(14,"select",10),u.TgZ(15,"option",11),u._uU(16,"Select Role"),u.qZA(),u.TgZ(17,"option",12),u._uU(18,"Approvers"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(19,"div",13),u.TgZ(20,"div",6),u.TgZ(21,"label",14),u._uU(22,"Username"),u.qZA(),u._UZ(23,"input",15),u.qZA(),u.TgZ(24,"div",6),u.TgZ(25,"label",16),u._uU(26,"Password"),u.qZA(),u._UZ(27,"input",17),u.qZA(),u.TgZ(28,"div",6),u.TgZ(29,"label",18),u._uU(30,"Confirm Password"),u.qZA(),u._UZ(31,"input",19),u.qZA(),u.qZA(),u.TgZ(32,"div",20),u.TgZ(33,"button",21),u.NdJ("click",function(){return r.validateForm()}),u._uU(34),u.qZA(),u.TgZ(35,"button",22),u.NdJ("click",function(){return r.cancelForm()}),u._uU(36,"Cancel"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.Q6J("formGroup",r.formGroup),u.xp6(34),u.Oqu(r._btnLabel))},directives:[h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u,h.EJ,h.YN,h.Kr],styles:[""]}),r}(),b=[{path:"",component:A,children:[{path:"",component:q,data:{title:"Users"}},{path:"create-user",component:(g=function(){function r(){e(this,r)}return t(r,[{key:"ngOnInit",value:function(){}}]),r}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-create-user"]],decls:6,vars:1,consts:[["header","",1,"card-header"],["body","",1,"card-body"],[3,"_btnLabel"]],template:function(e,r){1&e&&(u.TgZ(0,"app-ui-card"),u.TgZ(1,"div",0),u.TgZ(2,"h3"),u._uU(3,"Create New User"),u.qZA(),u.qZA(),u.TgZ(4,"div",1),u._UZ(5,"app-user-form",2),u.qZA(),u.qZA()),2&e&&(u.xp6(5),u.Q6J("_btnLabel","Create User"))},directives:[c.A,T],styles:[""]}),g),data:{title:"Create User"}}]}],y=function(){var r=function r(){e(this,r)};return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[o.Bz.forChild(b)],o.Bz]}),r}(),w=((_=function r(){e(this,r)}).\u0275fac=function(e){return new(e||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[[i.O,y]]}),_)}}])}();