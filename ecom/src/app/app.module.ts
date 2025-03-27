import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { HomeComponent } from './components/home/home.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
// import {routes} from './app-routing.module'
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { tokenInterceptor } from './core/token.interceptor';
import { AdminDashboardComponent } from './components/manage/admin-dashboard/admin-dashboard.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryFormComponent,
    HomeComponent,
    BrandsComponent,
    BrandFormComponent,
    ProductsComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomerProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, 
    RouterLink, 
    FormsModule,  
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    CarouselModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideZoneChangeDetection({eventCoalescing:true}),
    // provideRouter(routes),
    HttpClient,
    provideHttpClient(withInterceptors([tokenInterceptor])),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
