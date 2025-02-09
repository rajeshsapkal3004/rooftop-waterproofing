import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rooftop-waterproofing';

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    
    // Check if the clicked element is inside the navbar or the toggle button
    if (!targetElement.closest('.navbar') && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

}
