import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'configer',
        loadChildren: './configuration/configuration.module#ConfigurationModule'
    },
     // {
    //     path: 'ecommerce',
    //     loadChildren: 'app/ecommerce/ecommerce.module#EcommerceModule'
    // },
    {
        path: 'user-interface',
        loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule'
    },
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
    },
    {
        path: 'tables',
        loadChildren: 'app/tables/tables.module#TablesModule'
    },
    {
        path: 'charts',
        loadChildren: 'app/charts/charts.module#ChartsModule'
    },
    {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule'
    },
    {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule'
    },
    {
        path: 'maps',
        loadChildren: 'app/maps/maps.module#MapsModule'
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
