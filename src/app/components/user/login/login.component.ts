import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  constructor(private api:UserService, private toastr: ToastrService, private router:Router){
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.api.LoginByEmail().subscribe((res: any[]) =>{
        const user = res.find((loginUser:any)=>{
          return loginUser.email == this.loginForm.value.email && loginUser.password == this.loginForm.value.password;
        })
        if(user){
          localStorage.setItem("User", JSON.stringify(user));
          this.toastr.success("You are Succcessfully Logged In");
          this.loginForm.reset();
          this.router.navigateByUrl('/todo');
        }else{
          this.toastr.warning('Invalid Email or Password')
        }
      }, (err: any)=>{
        alert(err);
      })
    }
  }

}
