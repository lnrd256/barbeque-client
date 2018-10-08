import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000';
  config = {
    headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With':'XMLHttpRequest'
    }
}
  constructor(private  httpClient:  HttpClient) { 
  }

  login(email: string, password: string){
    var data = 
          {
            email:email,
            password:password
      };
      return  this.httpClient.post(`${this.API_URL}/api/auth/login`,data);
  }
  register(form){
    var data={
      name:form.name.value,
      email:form.email.value,
      password:form.password.value,
      password_confirmation:form.password_confirmation.value,
      zipcode:form.zipcode.value,
    }
    return  this.httpClient.post(`${this.API_URL}/api/auth/signup`,data);
  }
  private isLogged(){
    if (localStorage.getItem('TOKEN')) {
        return true;
    }
    return false;
  }
  private header(){
    let options={
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('TOKEN')}`
        }
      };
    return options;
  }
  getClientData(){
      return  this.httpClient.get(`${this.API_URL}/api/auth/user`,this.header());
  }
  saveBarbeque(form){
    let data={
      name:form.name.value,
      model:form.model.value,
      description:form.description.value,
      zipcode:form.zipcode.value
    }
    return  this.httpClient.post(`${this.API_URL}/api/auth/barbeque`,data,this.header());
  }
  listBarbeques(){
    return  this.httpClient.get(`${this.API_URL}/api/auth/barbeque`,this.header());
  }
  rent(id_barbeque){
    let data={
      id_barbeque:id_barbeque
    }
    return  this.httpClient.post(`${this.API_URL}/api/auth/barbeque/rent`,data,this.header());
  }
  return(id_barbeque){
    let data={
      id_barbeque:id_barbeque
    }
    return  this.httpClient.post(`${this.API_URL}/api/auth/barbeque/return`,data,this.header());
  }
  rented(){
    return  this.httpClient.get(`${this.API_URL}/api/auth/barbeque/rented`,this.header());
  }
}
