import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule,FormGroup,} from '@angular/forms'; 
import {HttpModule} from '@angular/http';
import {Ng2Webstorage} from 'ngx-webstorage';
import {CommonModule} from '@angular/common';
import {ParticlesModule} from 'angular-particle';


// import { ReportsComponent } from './Reports/reports/reports.component';
// import { NotificationComponent } from './notification/notification/notification.component';
// import { PatientlistComponent } from './patient list/patientlist/patientlist.component';
// import { ConfigurationComponent } from './configuration/configuration/configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    // NotificationComponent,
    // PatientlistComponent,
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    ParticlesModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
