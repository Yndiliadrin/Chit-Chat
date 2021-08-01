import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
