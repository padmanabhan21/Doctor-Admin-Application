import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'config',
    pathMatch: 'full'
},
  {
        path: 'config',
        component: ConfigurationComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
