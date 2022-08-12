import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import {FormsModule} from '@angular/forms';
import { PrefilledFormDataComponent } from './prefilled-form-data/prefilled-form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TempleteDrivenFormComponent,
    PrefilledFormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
