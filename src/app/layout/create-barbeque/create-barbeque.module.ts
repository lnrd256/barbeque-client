import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CreateBarbequeComponent} from './create-barbeque.component';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
   MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule,MatButtonModule
} from '@angular/material';
import { CreateBarbequeRoutingModule } from './create-barbeque-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    CreateBarbequeRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP19ZvfZrHy8T8nmh8rv3OuNOLdcq2HQo'
    }),
  ],
  declarations: [
    CreateBarbequeComponent
  ]
})
export class CreateBarbequeModule { }
