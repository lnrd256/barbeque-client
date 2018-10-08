import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
@Component({
  selector: 'app-create-barbeque',
  templateUrl: './create-barbeque.component.html',
  styleUrls: ['./create-barbeque.component.scss']
})
export class CreateBarbequeComponent implements OnInit {
  formCreate: FormGroup;
  lat: number ;
  
  lng: number ;
  constructor( private formBuilder: FormBuilder, 
    private router: Router,
    private api:ApiService) {  if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      description:[],
      zipcode:[]
  });
  }
  changeLocation(event){
    this.lat=event.coords.lati;
    this.lng=event.coords.lng;
  }
  get f() { return this.formCreate.controls; }
  save(event){
    event.preventDefault();
    this.api.saveBarbeque(this.f).subscribe(
      r=>{
        console.log(r);
        alert('Datos guardados correctamente');
        this.formCreate.reset();
      },
      r=>{
        alert('Hubo un error');
      }
    );
  }

}
