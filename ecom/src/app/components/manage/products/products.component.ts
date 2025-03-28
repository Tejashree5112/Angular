import { Component, inject } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ViewChild} from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'shortDescription', 'Price', 'discount', 'action',];
      dataSource: MatTableDataSource<Product>;
    
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;
    
      productService=inject(ProductService);
      constructor() {
        
          this.dataSource = new MatTableDataSource([] as any );
        }
        ngOnInit(){
          this.getServerData();
        
      }
    
      private getServerData() {
        this.productService.getAllProducts().subscribe((result) => {
          console.log(result);
          this.dataSource.data = result;
        });
      }
    
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    
      delete(id:string){
        console.log(id);
        this.productService.deleteProduct(id).subscribe((result:any)=>{
          alert("Product Deleted ! ");
          this.getServerData();
    
        });
    
      };

};


