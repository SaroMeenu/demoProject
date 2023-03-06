import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html'
})
export class ViewClientComponent {
    primaryClient: any;
    primaryClientList: any;

    constructor(private fb: FormBuilder) { } 

    ngOnInit(): void {
        this.getPrimaryClient();
    }

    getPrimaryClient(){

        this.primaryClient = localStorage.getItem('primaryData');
        if(this.primaryClient){
            this.primaryClientList = JSON.parse(this.primaryClient);
        }
    }
}
