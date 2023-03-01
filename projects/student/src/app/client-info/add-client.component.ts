import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    clientFormDataList: Array<any> =[];
    constructor(private fb: FormBuilder,private toastr: ToastrService) { } 

    ngOnInit(): void {
        let val = localStorage.getItem('clientData');
        if(val){
            this.clientFormDataList = JSON.parse(val);
          }
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
      this.submitted = true;
      if(this.clientForm.valid){
        
        for (let index = 0; index < this.clientForm.value.clientInfo.length; index++) {
            this.clientFormDataList.push(this.clientForm.value.clientInfo[index]);
            
        }
        this.clientFormDataList.forEach((item:any,i:any) => {
            item.id = i+1;
        });
        localStorage.setItem('clientData',(JSON.stringify(this.clientFormDataList)));
        this.showSuccess();
        this.clientForm.reset();
        this.submitted = false;
       }
    }
}
