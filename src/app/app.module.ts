import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { ReportsComponent } from './Reports/reports/reports.component';
// import { NotificationComponent } from './notification/notification/notification.component';
// import { PatientlistComponent } from './patient list/patientlist/patientlist.component';
// import { ConfigurationComponent } from './configuration/configuration/configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    // ReportsComponent,
    // NotificationComponent,
    // PatientlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
