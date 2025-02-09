import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-detail-dialog',
  templateUrl: './service-detail-dialog.component.html',
  styleUrls: ['./service-detail-dialog.component.css']
})
export class ServiceDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ServiceDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
