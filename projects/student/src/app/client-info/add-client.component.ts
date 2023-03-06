import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from, map } from 'rxjs';

const controlNames = {
    name: 'name',
    email: 'email',
    mobileNumber: 'mobileNumber',
    language: 'language',
};

  
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class AddClientComponent {

    public languageList = [{value:'Tamil'},{value:'English'},{value:'Hindi'},{value:'Telugu'},{value:'Malayalam'}];
    public readonly controlNames = controlNames;
    public clientForm : FormGroup = this.fb.group({ 
        clientInfo: new FormArray([this.getClientInfoForm()]),
    
      })
    constructor(private fb: FormBuilder,private toastr: ToastrService) { } 

    ngOnInit(): void {
    }
    getClientInfoForm() {    
        return new FormGroup({      
          name: new FormControl("",Validators.required),    
          email: new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
          mobileNumber: new FormControl("",[Validators.required,Validators.minLength(10)]),
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

    showSuccess() {
        this.toastr.success('Client added successfully');
    }

    submit(){
      if(this.clientForm.valid){
        
        let val = localStorage.getItem('clientData');
        if(val){
            var clientVal = JSON.parse(val);
            var clientData = [...clientVal, ...this.clientForm.value.clientInfo]
        }
        else{
            var clientData = [...this.clientForm.value.clientInfo]
        }
        clientData.map((d:any,i:any) => d.id = i+1 );
        localStorage.setItem('clientData',(JSON.stringify(clientData)));
        this.showSuccess();
        this.clientForm.reset();
       }
       else {
        this.clientForm.markAllAsTouched();
       }
    }
}
