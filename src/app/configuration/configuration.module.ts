import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
 
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule { }
