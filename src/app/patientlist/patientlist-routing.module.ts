import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientlistComponent } from './patientlist/patientlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient',
    pathMatch: 'full'
},
  {
        path: 'patient',
        component: PatientlistComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientlistRoutingModule { }
