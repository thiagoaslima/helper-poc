import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'billing',
    loadChildren: () =>
      import('../billing/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
