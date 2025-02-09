import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TestimonialsModule { }
