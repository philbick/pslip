import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from './calculator.service'
import { TesterComponent } from './tester.component'
import { TesterService } from './tester.service'

@NgModule({
  declarations: [
    AppComponent, CalculatorComponent, TesterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule
  ],
  providers: [CalculatorService,TesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
