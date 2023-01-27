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
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';
import { MainStepperComponent } from './components/molecules/main-stepper/main-stepper.component';

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent, StepperComponent, HeaderComponent, SidebarComponent, MainStepperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
