import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientlistRoutingModule } from './patientlist-routing.module';
import { PatientlistComponent } from './patientlist/patientlist.component';

@NgModule({

  imports: [
    CommonModule,
    PatientlistRoutingModule
  ],
  declarations: [PatientlistComponent]
})
export class PatientlistModule { }
