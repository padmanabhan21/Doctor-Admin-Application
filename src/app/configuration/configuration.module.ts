import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
// import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule,FormGroup,} from '@angular/forms'; 
import {HttpModule} from '@angular/http';
import {ParticlesModule} from 'angular-particle';


@NgModule({
 
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    HttpClientModule,
    FormsModule,HttpModule,ParticlesModule
  ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule { }
