import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { RtlComponent } from './rtl/rtl.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ],
  declarations: [MainComponent, RtlComponent, HorizontalComponent]
})
export class DashboardModule { }
