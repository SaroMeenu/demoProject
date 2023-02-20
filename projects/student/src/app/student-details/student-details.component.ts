import { Component , OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  submitted:any = false;
  mobileTypeList = [ 'Home','Mobile', 'Work']
  studentForm : FormGroup = this.fb.group({ 
    name: new FormControl('', [Validators.required]),     
    emails: new FormArray([this.getemailForm()],Validators.required), 
    mobile: new FormArray([this.getMobileForm()]),   
    school: new FormArray([this.getSchoolForm()]),

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getemailForm() {    
    return new FormGroup({      
      email: new FormControl("",[Validators.required]),    
    });  
  }

  getMobileForm() {    
    return new FormGroup({      
      mobileNumber: new FormControl("",Validators.required),    
      mobileType: new FormControl(""),
    });  
  }

  getSchoolForm() {    
    return new FormGroup({      
      schoolName: new FormControl(""),    
      address: new FormControl(""),
      state: new FormControl(""),
      nationality: new FormControl(""),
      fromToYear: new FormControl(""),
    });  
  }


  get emails() { 
    return this.studentForm.controls["emails"] as FormArray; 

  } 

  emailIndex(index:any) {
    var emailList= this.studentForm.get('emails') as FormArray;
    const formGroup = emailList.controls[index] as FormGroup;
    return formGroup;
  }

  mobileIndex(index:any) {
    var mobileList= this.studentForm.get('mobile') as FormArray;
    const formGroup = mobileList.controls[index] as FormGroup;
    return formGroup;
  }

  get mobile() { 
    return this.studentForm.controls["mobile"] as FormArray; 
  }  
  
  get school() { 
    return this.studentForm.controls["school"] as FormArray; 
  }  
  
  addNewEmail(){     
    const control = <FormArray>(this.studentForm.get("emails"));    
    control.push(this.getemailForm());  
  }

  addNewMobile(){     
    const control = <FormArray>(this.studentForm.get("mobile"));    
    control.push(this.getMobileForm());  
  }

  addNewSchool(){     
    const control = <FormArray>(this.studentForm.get("school"));    
    control.push(this.getSchoolForm());  
  }

  submit(){
    this.submitted = true;
    console.log(this.studentForm)
    if(this.submitted){
      console.log(this.studentForm.value);
    }
    
   
  }
}
