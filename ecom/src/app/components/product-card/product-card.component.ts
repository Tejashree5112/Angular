import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product-card',
  standalone: false,

  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  zoomIn(event: any) {
    event.target.style.transform = 'scale(1.1)';
  }

  zoomOut(event: any) {
    event.target.style.transform = 'scale(1)';
  }
}
