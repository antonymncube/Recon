import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './store/index';
import { InvoiceComponent } from './features/invoice/components/invoice/invoice.component';
import { InvoiceEffects } from './features/invoice/store/effects/invoice.effect';
import { suppliereffects } from './features/supplier/store/effects/supplier.effects';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SupplierComponent } from './features/supplier/components/supplier/supplier.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemsDilogComponent } from './features/invoice/components/items-dilog/items-dilog.component';  // Add MatDialogModule import
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { InvoicesComponent } from './features/invoice/components/invoices/invoices.component';
import { LeftSidenavbarComponent } from './master-layout/left-sidenavbar/left-sidenavbar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    MasterLayoutComponent,
    SupplierComponent,
    ItemsDilogComponent,
    InvoicesComponent,
    LeftSidenavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([InvoiceEffects, suppliereffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule ,
    FormsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
