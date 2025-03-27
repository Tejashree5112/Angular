import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../types/product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: true
  }


  customerService=inject(CustomerService);
  newProducts:Product[]=[];
  featuredProducts:Product[]=[];
  bannerImages:Product[]=[];

  ngOnInit(){
    this.customerService.getFeaturedProducts().subscribe((result)=>{
      this.featuredProducts=result;
      console.log(this.featuredProducts,">>>>>>>>>>>>");
      this.bannerImages.push(...result);

    });

    this.customerService.getNewProducts().subscribe((result)=>{
      this.newProducts=result;
      console.log(this.newProducts,"?????????????");
      this.bannerImages.push(...result);
    });
  }

  zoomIn(event: any) {
    event.target.style.transform = 'scale(1.1)';
  }

  zoomOut(event: any) {
    event.target.style.transform = 'scale(1)';
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

}
