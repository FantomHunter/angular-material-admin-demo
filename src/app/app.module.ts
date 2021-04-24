import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './dashboard/ad.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemTemplateComponent } from './dashboard/item-template/item-template.component';
import { RegisterFormComponent } from './dashboard/register-form/register-form.component';
import { MaterialModule } from './material.module';
import { DashboardFlexComponent } from './dashboard-flex/dashboard-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterFormComponent,
    ItemTemplateComponent,
    AdDirective,
    DashboardFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
