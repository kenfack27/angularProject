import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass,FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatRadioModule, ReactiveFormsModule,RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor( private router:Router){}
 isRegister=false;

 registrationForm=new FormGroup({
  FullName:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email]),
  Password:new FormControl("",[Validators.required,Validators.minLength(6)])

 });
 LoginForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  Password:new FormControl("",[Validators.required])

 })

 handleRegister(){
  console.log("register",this.registrationForm.value);
  this.router.navigateByUrl('/home')
 }
 handleLogin(){
  console.log("Login",this.LoginForm.value);
  this.router.navigateByUrl('/home')

 }
 tooglePanel(){
  this.isRegister=!this.isRegister
 }
}
