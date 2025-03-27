import { Component, inject } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  standalone: false,
  
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.scss'
})
export class BrandFormComponent {
  name!:string;
  brandservice=inject(BrandService);
  router=inject(Router);
  route=inject(ActivatedRoute);
  id!:string;
  ngOnInit(){
    this.id=this.route.snapshot.params["id"];
    this.brandservice.getBrandById(this.id).subscribe(result=>{
      this.name=result.name;
    })
  }
  add(){
    this.brandservice.addBrand(this.name).subscribe(result=>{
      alert("Brand Added !");
      this.router.navigateByUrl("/admin/brands");
    });
  }

  update(){
    this.brandservice.updateBrand(this.id, this.name).subscribe(result=>{
      alert("Brand Updated !");
      this.router.navigateByUrl("/admin/brands");
    });
  }
}
