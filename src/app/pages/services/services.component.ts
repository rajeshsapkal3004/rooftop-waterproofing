import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceDetailDialogComponent } from './service-detail-dialogue/service-detail-dialog/service-detail-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      name: "Rooftop Waterproofing",
      description: "Protects your roof from leaks and weather damage.",
      image: "assets/roof3.jpg"
    },
    {
      name: "Wall Waterproofing",
      description: "Prevents moisture seepage in walls.",
      image: "assets/roof2.jpg"
    },
    {
      name: "Basement Waterproofing",
      description: "Keeps your basement dry and prevents mold formation.",
      image: "assets/roof1.jpg"
    },
    {
      name: "Leakage Repair",
      description: "Fixes water leakage issues in any part of your home.",
      image: "assets/roof4.jpg"
    }
  ];

  constructor(private dialog: MatDialog) {}

  openServiceDetail(service: any) {
    this.dialog.open(ServiceDetailDialogComponent, {
      width: '400px',
      data: service
    });
  }
}

