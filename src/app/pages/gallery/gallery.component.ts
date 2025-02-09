import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  projects = [
    { 
      name: 'Rooftop Waterproofing',
      before: 'assets/roof1.jpg',
      after: 'assets/roof2.jpg'
    },
    { 
      name: 'Wall Waterproofing',
      before: 'assets/roof3.jpg',
      after: 'assets/roof4.jpg'
    },
    { 
      name: 'Basement Waterproofing',
      before: 'assets/roof5.jpg',
      after: 'assets/roof6.jpg'
    },
    { 
      name: 'Leakage Repair',
      before: 'assets/roof7.jpg',
      after: 'assets/roof8.jpg'
    },
    { 
      name: 'Leakage Repair',
      before: 'assets/roof9.jpg',
      after: 'assets/roof10.jpg'
    }
  ];


  modalImage: string | null = null;

openModal(imageUrl: string) {
  this.modalImage = imageUrl;
}

closeModal() {
  this.modalImage = null;
}

}
