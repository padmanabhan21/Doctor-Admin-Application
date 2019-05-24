import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'configer',
        loadChildren: './configuration/configuration.module#ConfigurationModule'
    },
    {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'patientlist',
        loadChildren: './patientlist/patientlist.module#PatientlistModule'
    },
    {
        path: 'notifi',
        loadChildren: './notification/notification.module#NotificationModule'
    },
    {
        path: 'report',
        loadChildren: './Reports/reports.module#ReportsModule'
    },
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }