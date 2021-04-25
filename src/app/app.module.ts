import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardFlexComponent } from './dashboard-flex/dashboard-flex.component';
import { AdDirective } from './dashboard/ad.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemTemplateComponent } from './dashboard/item-template/item-template.component';
import { RegisterFormComponent } from './dashboard/register-form/register-form.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterFormComponent,
    ItemTemplateComponent,
    AdDirective,
    DashboardFlexComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
