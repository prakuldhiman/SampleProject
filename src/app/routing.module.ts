import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const routes: Routes = [
    // {
    //     path: 'user',
    //     loadChildren: 'app/modules/user-module/user.module#UserModule'
    // },
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'product', component: ProductsComponent },
    { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
