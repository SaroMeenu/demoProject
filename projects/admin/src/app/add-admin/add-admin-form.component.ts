import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { language } from '../constants/language.const';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AdminActions from '../actions/admin.actions'

@Component({
  selector: 'app-add-admin-form',
  templateUrl: './add-admin-form.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminFormComponent {


    public languageList = language;
    adminForm: FormGroup= this.fb.group({ 
        adminInfo: new FormArray([this.getAdminInfoForm()]),
      })
    constructor(private fb: FormBuilder,private store: Store<AppState>){

    }

    ngOnInit(){

    }

    getAdminInfoForm() {    
        return new FormGroup({      
          name: new FormControl("",Validators.required),    
          email: new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
          mobileNumber: new FormControl("",[Validators.required,Validators.minLength(10)]),
          language: new FormControl("",Validators.required),
        });  
    }

    get adminInfo() { 
        return this.adminForm.controls["adminInfo"] as FormArray; 
    }

    adminInfoIndex(index:any){
        var adminList= this.adminForm.get('adminInfo') as FormArray;
        const formGroup = adminList.controls[index] as FormGroup;
        return formGroup;
    }

    addNewAdmin(){     
        const controls = this.adminForm.controls['adminInfo'] as FormArray;    
        controls.push(this.getAdminInfoForm());  
    }

    submit(){
        if(this.adminForm.valid){
            for (let index = 0; index < this.adminForm.value.adminInfo.length; index++) {
              this.store.dispatch(new AdminActions.AddDemo({
                name : this.adminForm.value.clientInfo[index].name,
                email : this.adminForm.value.clientInfo[index].email,
                mobileNumber : this.adminForm.value.clientInfo[index].mobileNumber,
                language : this.adminForm.value.clientInfo[index].language,
              }
              ))
              
            }
          }
          else{
            this.adminForm.markAllAsTouched();
          }
    }
}
