import { Component } from '@angular/core';

import { serviceDetails } from 'src/app/services/serviceDetails';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  
  serviceDetails = serviceDetails;

  selectedService: string | null = null;

   showServiceDetails(service: string) {
    // Toggle the visibility of the selected service's card
    if (this.selectedService === service) {
      this.selectedService = null; // Close the card if clicked again
    } else {
      this.selectedService = service; // Open the respective card
    }
  }


}
