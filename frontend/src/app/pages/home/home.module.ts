import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../navigation/navigation.module';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NavigationModule,
    SidebarModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
