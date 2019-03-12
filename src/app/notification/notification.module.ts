import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification/notification.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';


@NgModule({
  
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ReactiveFormsModule,
    FormsModule,RouterTestingModule
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
