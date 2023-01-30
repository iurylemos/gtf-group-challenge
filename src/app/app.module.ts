import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/organisms/stepper/stepper.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { MainStepperComponent } from './components/molecules/main-stepper/main-stepper.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/molecules/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    StepperComponent,
    HeaderComponent,
    MainStepperComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    InputMaskModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
