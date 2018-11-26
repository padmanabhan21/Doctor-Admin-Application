import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
},

{
  path: 'authentication',
  loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
