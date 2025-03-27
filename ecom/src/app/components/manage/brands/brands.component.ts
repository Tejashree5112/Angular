import { Component, inject } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ViewChild} from '@angular/core';
import { Brand } from '../../../types/brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brands',
  standalone: false,
  
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  displayedColumns: string[] = ['id', 'name', 'action',];
    dataSource: MatTableDataSource<Brand>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    brandService=inject(BrandService);
    constructor() {
      
        this.dataSource = new MatTableDataSource([] as any );
      }
      ngOnInit(){
        this.getServerData();
      
    }
  
    private getServerData() {
      this.brandService.getBrands().subscribe((result) => {
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
      this.brandService.deleteBrandById(id).subscribe((result:any)=>{
        alert("Brand Deleted ! ");
        this.getServerData();
  
      })
  
    }

}
