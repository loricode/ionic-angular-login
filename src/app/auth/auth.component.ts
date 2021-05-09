import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
 
  formAuth = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
   private route: ActivatedRoute,
   private router: Router) { }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email')
    this.formAuth.setValue({email, password:''})
  }

  public iniciarSesion():void{
   
    //this.router.navigate(['folder/Inbox'])
  }

}
