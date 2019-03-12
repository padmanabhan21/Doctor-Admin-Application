import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PatientlistRoutingModule } from './patientlist-routing.module';
import { PatientlistComponent } from './patientlist/patientlist.component';

@NgModule({

  imports: [
    CommonModule,
    PatientlistRoutingModule,
    FormsModule,
  ],
  declarations: [PatientlistComponent]
})
export class PatientlistModule { }
