import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataproviderService } from './services/dataprovider.service';
import { SpBillingComponent } from './sp-billing/sp-billing.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NavbarComponent,
      BillingComponent,
      SpBillingComponent
     
  ],
  imports: [
      BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule.forRoot([
          
          { path: 'billing', component: BillingComponent },
          { path: 'nav', component: NavbarComponent },
          { path: 'spbilling', component: SpBillingComponent }
      ]
      )

  ],
  providers: [DataproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
