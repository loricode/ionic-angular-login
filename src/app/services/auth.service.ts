import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Email{
  email:string
}

interface Login {
  email:string,
  password:string
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost/backend/";
  
  constructor(private http:HttpClient) { }

  public verificarEmail(obj:Email){
      return this.http.post<any>(this.url+`auth/`, obj);  
  }


}
