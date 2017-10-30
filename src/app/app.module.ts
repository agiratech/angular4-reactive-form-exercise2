import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorsComponent } from './errors.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent, ErrorsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
