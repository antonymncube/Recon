import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { reducers } from './store/index';
import { InvoiceComponent } from './features/invoice/components/invoice/invoice.component';
import { InvoiceEffects } from './features/invoice/store/effects/invoice.effect';
import { suppliereffects } from './features/supplier/store/effects/supplier.effects';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,  
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([InvoiceEffects,suppliereffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
