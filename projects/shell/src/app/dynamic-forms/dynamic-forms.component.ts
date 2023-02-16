import { Component, Input, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { FormData, FormFieldData } from 'projects/shell/shared/interface/form-data';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  @Input()formData!: any;
  form!: FormGroup;
  formFieldData: any=[];
  constructor() {}

  ngOnChanges(){

    const formGroup:any = {};
    var formControlFields = Object.keys(this.formData.fields)
    console.log(formControlFields)
    for (let i = 0; i < formControlFields.length; i++) {
      this.formData.fields[formControlFields[i]].formControlName = formControlFields[i]
      formGroup[formControlFields[i]] = new FormControl('');
      this.formFieldData.push(this.formData.fields[formControlFields[i]])
    }
    console.log(this.formData)
    console.log(this.formFieldData)
    this.form = new FormGroup(formGroup);
  }
  ngOnInit() {
  }

  submit(){
    console.log(this.form.value)
  }
 
}
