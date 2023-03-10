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
  stateList = [{value:'Tamil Nadu'},{value:'Karnataka'},{value:'Andra Pradesh'},{value:'Gujarat'}]
  nationalityList = [{value:'India'},{value:'USA'},{value:'South Africa'},{value:'Srilenka'}]
  fromToYearList = [{value:'2015-2016'},{value:'2016-2017'},{value:'2017-2018'},{value:'2018-2019'}]
  studentForm : FormGroup = this.fb.group({ 
    name: new FormControl('', [Validators.required]),     
    emails: new FormArray([this.getemailForm()]), 
    mobile: new FormArray([this.getMobileForm()]),   
    school: new FormArray([this.getSchoolForm()]),

  })
  studentFormDataList: Array<any> = [];
  stuData: any = [];
  studentInfoList: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getStudentData();
    if(this.stuData){
        this.studentFormDataList = JSON.parse(this.stuData);
      }
  }

  getemailForm() {    
    return new FormGroup({      
      email: new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),    
    });  
  }

  getMobileForm() {    
    return new FormGroup({      
      mobileNumber: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),    
      mobileType: new FormControl(""),
    });  
  }

  getSchoolForm() {    
    return new FormGroup({      
      schoolName: new FormControl("",Validators.required),    
      address: new FormControl("",Validators.required),
      state: new FormControl("",Validators.required),
      nationality: new FormControl("",Validators.required),
      fromToYear: new FormControl("",Validators.required),
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

  schoolIndex(index:any){
    var schoolList= this.studentForm.get('school') as FormArray;
    const formGroup = schoolList.controls[index] as FormGroup;
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
    if(this.submitted && this.studentForm.valid){
      this.studentFormDataList.push(this.studentForm.value);
      localStorage.setItem('studentData',(JSON.stringify(this.studentFormDataList)));
      this.studentForm.reset();
      this.submitted = false;
      this.getStudentData();
    }   
  }

  getStudentData(){
    this.stuData = localStorage.getItem('studentData');
    this.studentInfoList = JSON.parse(this.stuData)
    for (let index = 0; index < this.studentInfoList.length; index++) {
      let emailList:Array<any> = [];
      let mobileList:Array<any> = [];
      let schoolList:Array<any> = [];
      this.studentInfoList[index].emails.forEach( (item:any) => {
        emailList.push(item.email);
        this.studentInfoList[index].emailList = emailList.join(', ');
      });
      this.studentInfoList[index].mobile.forEach( (item:any) => {
        mobileList.push(item.mobileNumber);
        this.studentInfoList[index].mobileList = mobileList.join(', ');
      });
      this.studentInfoList[index].school.forEach( (item:any) => {
        schoolList.push(item.schoolName,item.address,item.state,item.nationality,item.fromToYear);
        this.studentInfoList[index].schoolList = schoolList.join(', ');
      });
    }   
  }

}
