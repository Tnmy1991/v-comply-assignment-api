import { NgModule } from '@angular/core';

import { MihupUiModule } from './../_ui/mihup-ui.module';
import { VendorComponent } from './vendor/vendor.component';
import { VendorManagementComponent } from './vendor-management.component';
import { VendorManagementRoutingModule } from './vendor-management-routing.module';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorWorkflowComponent } from './vendor/vendor-workflow/vendor-workflow.component';


@NgModule({
  declarations: [
    VendorComponent, 
    CreateVendorComponent, 
    VendorDetailComponent, 
    VendorWorkflowComponent, 
    VendorManagementComponent
  ],
  imports: [
    MihupUiModule,
    VendorManagementRoutingModule
  ]
})
export class VendorManagementModule { }
