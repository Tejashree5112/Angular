import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  reviewerName: string = '';
  reviewText: string = '';
  reviews: { name: string, text: string }[] = [];

  submitReview() {
    if (this.reviewerName && this.reviewText) {
      this.reviews.push({ name: this.reviewerName, text: this.reviewText });
      this.reviewerName = '';
      this.reviewText = '';
    }
  }
}