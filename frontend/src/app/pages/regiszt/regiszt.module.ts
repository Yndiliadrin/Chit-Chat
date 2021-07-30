import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisztComponent } from './regiszt.component';
import { RegisztRoutingModule } from './regiszt-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RegisztComponent
  ],
  imports: [
    CommonModule,
    RegisztRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisztComponent
  ]
})
export class RegisztModule { }
