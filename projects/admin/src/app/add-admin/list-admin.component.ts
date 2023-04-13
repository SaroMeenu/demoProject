import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { admin } from '../modal/admin-info.modal';
import * as AdminActions from '../actions/admin.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html'
})
export class ListAdminComponent {

    admin!: Observable<admin[]>;
    userData: any;
    constructor(private store:Store<AppState>){
        this.admin = this.store.select('adminStore');
        this.userData = this.admin.subscribe(event => console.log(event));
    }

    ngOnInit(){

    }
    
}
