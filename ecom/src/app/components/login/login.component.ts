import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formBuilder=inject(FormBuilder);
  loginForm=this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
  });

  authService=inject(AuthService);
  router=inject(Router);

  login(){
     console.log(this.loginForm.value);
     this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe((result:any)=>{
      console.log(result,"??????????");
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      this.router.navigateByUrl('/');
     })
  }

}
