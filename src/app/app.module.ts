import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { FirstAppWithHtmlTemplateComponent } from './first-app-with-html-template/first-app-with-html-template.component';
import { SnackBarConfirmationComponent } from './shared/snack-bar-confirmation/snack-bar-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    FirstAppWithHtmlTemplateComponent,
    SnackBarConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
