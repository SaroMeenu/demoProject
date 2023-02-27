import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class AddClientComponent {

    languageList = [{value:'Tamil'},{value:'English'},{value:'Hindi'},{value:'Telugu'},{value:'Malayalam'}];
    submitted:boolean = false;
    clientForm : FormGroup = this.fb.group({ 
        clientInfo: new FormArray([this.getClientInfoForm()]),
    
      })
    constructor(private fb: FormBuilder) { } 

    ngOnInit(): void {
      }

    getClientInfoForm() {    
        return new FormGroup({      
          name: new FormControl("",Validators.required),    
          email: new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
          mobileNumber: new FormControl("",[Validators.required,Validators.pattern("^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3} - [0-9]{4}$")]),
          language: new FormControl("",Validators.required),
        });  
    }

    get clientInfo() { 
        return this.clientForm.controls["clientInfo"] as FormArray; 
      }  

    addNewClient(){     
        const control = <FormArray>(this.clientForm.get("clientInfo"));    
        control.push(this.getClientInfoForm());  
    }

    clientInfoIndex(index:any){
        var clientList= this.clientForm.get('clientInfo') as FormArray;
        const formGroup = clientList.controls[index] as FormGroup;
        return formGroup;
    }

    submit(){
      console.log(this.clientForm.value);
      this.submitted = true;
    }
}
