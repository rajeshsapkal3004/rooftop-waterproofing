import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: "Rahul Sharma",
      feedback: "The waterproofing service was excellent! My home is completely leak-proof now.",
      rating: 5,
      image: "assets/roof1.jpg"
    },
    {
      name: "Priya Mehta",
      feedback: "Professional team, high-quality materials, and quick service. Highly recommended!",
      rating: 4.5,
      image: "assets/roof6.jpg"
    },
    {
      name: "Amit Verma",
      feedback: "Great work! I no longer have moisture problems in my basement.",
      rating: 4,
      image: "assets/roof5.jpg"
    },
    {
      name: "Neha Singh",
      feedback: "Highly skilled professionals. My walls are now completely moisture-free.",
      rating: 5,
      image: "assets/roof2.jpg"
    },
    {
      name: "Vikram Patel",
      feedback: "Timely service and excellent work. The leakage problem is completely resolved.",
      rating: 4,
      image: "assets/roof3.jpg"
    },
    {
      name: "Sanjay Khanna",
      feedback: "Great pricing and quality work. My basement is dry and mold-free now.",
      rating: 4.5,
      image: "assets/roof4.jpg"
    },
    {
      name: "Pooja Desai",
      feedback: "Very professional and knowledgeable team. Worth every penny!",
      rating: 5,
      image: "assets/roof7.jpg"
    },
    {
      name: "Rohan Malhotra",
      feedback: "Fast and reliable service. My terrace no longer has water pooling issues.",
      rating: 4.5,
      image: "assets/roof8.jpg"
    },
    {
      name: "Anjali Kapoor",
      feedback: "The team was very cooperative and explained everything well. Fantastic job!",
      rating: 5,
      image: "assets/roof9.jpg"
    },
    {
      name: "Deepak Joshi",
      feedback: "I was skeptical at first, but the results speak for themselves. No more leaks!",
      rating: 4,
      image: "assets/roof10.jpg"
    }
  ];
  

  getStarArray(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    
    return {
      fullStars: new Array(fullStars),
      halfStars: new Array(halfStars),
      emptyStars: new Array(emptyStars)
    };
  }



}
