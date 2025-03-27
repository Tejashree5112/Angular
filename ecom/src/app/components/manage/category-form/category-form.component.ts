import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: false,
  
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  name!:string;
  categoryservice=inject(CategoryService);
  router=inject(Router);
  route=inject(ActivatedRoute);

  isEdit=false;
  id!:string;
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    if(this.id){
      this.isEdit=true;
        this.categoryservice.getCategoryById(this.id).subscribe((result:any)=>{
          console.log(result);
          this.name=result.name;
        })
    }
  }
  add(){
    console.log(this.name);
    this.categoryservice.addCategory(this.name).subscribe((result:any)=>{
      alert("Category Added !");
      this.router.navigateByUrl("/admin/categories");
    })
  }

  update(){
    console.log(this.name);
    this.categoryservice.updateCategory(this.id, this.name).subscribe((result:any)=>{
      alert("Category Updated !");
      this.router.navigateByUrl('/admin/categories')  
      })

  }
}
