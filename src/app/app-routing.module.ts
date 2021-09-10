import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CollectionsComponent } from './modules/collections/collections.component';
import { CompaignComponent } from './modules/compaign/compaign.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'collections',
      component: CollectionsComponent,
    },
    {
      path: 'compaign',
      component: CompaignComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
  ]
  },
  {
    path: 'products',
    component: ProductsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
