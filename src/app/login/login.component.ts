import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formEmail = new FormGroup({
    email: new FormControl('')
  });

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {}

  public iniciar():void {

    this.authService.verificarEmail(this.formEmail.value)
    .subscribe((response) => {
      if((response.data)){
        this.router.navigate(['auth'])
      }else{
        console.log(response.data)
      }
    },(error ) => {
     console.log(error)
  });
  
   //
  }

}
