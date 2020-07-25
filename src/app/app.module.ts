import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditInputComponent } from './edit-input/edit-input.component';
import { AutofocusDirective } from './autofocus.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, EditInputComponent, AutofocusDirective, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
