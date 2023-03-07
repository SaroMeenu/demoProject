import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html'
})
export class ViewClientComponent {
    primaryClient: any;
    primaryClientList: any;
    $client!: Observable<any>;    
    clientList: any=[];
    dataList: any;
    constructor(private fb: FormBuilder,public apiService:ApiService) { 
    } 

    ngOnInit(): void {
        this.getPrimaryClient();
        this.$client = this.apiService.client ; 
        this.$client.subscribe(event => this.clientList.push(event));
    }

    getPrimaryClient(){

        this.primaryClient = localStorage.getItem('clientData');
        if(this.primaryClient){
            this.primaryClientList = JSON.parse(this.primaryClient);
        }
        this.dataList = this.primaryClientList.filter((s:any) => s.isPrimary == true);
        this.apiService.setUser(this.dataList[0]);
    }
}
