import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceDetailDialogComponent } from './service-detail-dialogue/service-detail-dialog/service-detail-dialog.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceDetailDialogComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ServicesModule { }
