import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactInfo = {
    address: 'Shivam Terrace Solutions, Surat, India',
    phone: '+91 7069851380',
    email: 'info@waterproofing.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM'
  };

}
