import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { InvoiceComponent } from './features/invoice/components/invoice/invoice.component';
import { SupplierComponent } from './features/supplier/components/supplier/supplier.component';
import { InvoicesComponent } from './features/invoice/components/invoices/invoices.component';

const routes: Routes = [
  {
    path: '',   
    component: MasterLayoutComponent,
    children: [
      { path: 'edit-invoice/:id', component: InvoiceComponent },   
      { path: 'mark', component: SupplierComponent },
      {path:'invoices',component:InvoicesComponent}  
    ]
  },
  { path: '**', redirectTo: '' }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
