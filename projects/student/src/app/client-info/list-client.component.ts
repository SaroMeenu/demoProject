import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html'
})
export class ListClientComponent {
    clientData: any;
    clientDataList: any;

    constructor(private fb: FormBuilder) { } 

    ngOnInit(): void {
        this.getClientDetails();
    }

    getClientDetails(){
        this.clientData = localStorage.getItem('clientData');
        this.clientDataList = JSON.parse(this.clientData);
    }

    setAsPrimary(data:any){
        this.clientDataList.forEach((client:any) => {
            client.isPrimary = false;
            if(client.id === data.id){
                data.isPrimary = true;
            } 
        });
        localStorage.setItem("clientData", JSON.stringify(this.clientDataList));
    }

    deleteClient(data:any,i:any){
        this.clientDataList.splice(i, 1);
        localStorage.setItem("clientData", JSON.stringify(this.clientDataList));
    }

}
