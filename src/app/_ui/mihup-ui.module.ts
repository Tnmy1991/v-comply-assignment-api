import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent, HeaderComponent, WrapperComponent, BurgerMenuComponent } from './global';
import { ModalComponent, ButtonComponent, DatatableComponent, DataSelectionComponent } from './elements';

@NgModule({
  declarations: [
    /* components */
    CardComponent, 
    ModalComponent, 
    ButtonComponent, 
    HeaderComponent, 
    WrapperComponent,   
    DatatableComponent,
    BurgerMenuComponent,
    DataSelectionComponent
  ],
  imports: [
    FormsModule, 
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  exports: [
    FormsModule, 
    CommonModule,
    RouterModule, 
    ReactiveFormsModule, 
    /* components */
    CardComponent, 
    ModalComponent, 
    ButtonComponent, 
    HeaderComponent, 
    WrapperComponent,   
    DatatableComponent,
    BurgerMenuComponent,
    DataSelectionComponent
  ]
})
export class MihupUiModule { }
