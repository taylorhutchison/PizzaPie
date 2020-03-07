import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderBuilderComponent } from './components/order-builder/order-builder.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'build', component: OrderBuilderComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
