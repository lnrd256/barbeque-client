import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {ApiService} from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    places: Array<any> = [];
    barbeques: any;
    rentedBarbeques:any;
    constructor( 
        private router: Router,
        private api:ApiService) {
    }

    ngOnInit() {
       this.reload();
    }
    reload(){
        this.api.listBarbeques().subscribe(r=>{
            this.barbeques=r
        })
        this.getRented();
    }
    getRented(){
        this.api.rented().subscribe(r=>{
            this.rentedBarbeques=r
            console.log(r)
        })
    }
    rent(id_barbeque){
        this.api.rent(id_barbeque).subscribe(
            r=>{
                alert('Barbacoa rentada correctamente');
                this.reload();
            }
        )
    }
    return(id_barbeque){
        this.api.return(id_barbeque).subscribe(
            r=>{
                alert('Barbacoa retornada correctamente');
                this.reload();
            }
        )
    }
    
}
