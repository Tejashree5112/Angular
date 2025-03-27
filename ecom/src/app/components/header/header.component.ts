import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  customerService=inject(CustomerService);
  categoryList:Category[]=[];
  searchTerm!:string;

  router=inject(Router);
  authService=inject(AuthService);


  ngOnInit(){
    this.customerService.getCategories().subscribe(result=>{
      this.categoryList=result;
    })
  }

  onSearch(e:any){
    if(e.target.value){
      this.router.navigateByUrl('/products?search='+e.target.value);
    }
  }

  searchCategory(id:string){
    this.searchTerm='';
    this.router.navigateByUrl('/products?categoryId='+id!)
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
