import { Component, Input, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { FormData, FormFieldData } from 'projects/shell/shared/interface/form-data';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  @Input()formData!: any;
  form!: FormGroup;
  formFieldData: any=[];
  public options: FormlyFormOptions = {};
  public model = {  
  };
  public fields: FormlyFieldConfig[] = [];
  constructor() {}

  ngOnChanges(){

    const formGroup:any = {};
    var formControlFields = Object.keys(this.formData.fields)
    for (let i = 0; i < formControlFields.length; i++) {
      this.formData.fields[formControlFields[i]].formControlName = formControlFields[i]
      formGroup[formControlFields[i]] = new FormControl('');
      this.formFieldData.push(this.formData.fields[formControlFields[i]])
      this.formFieldData[i].key = this.formFieldData[i].formControlName;
      this.formFieldData[i].templateOptions = {options : this.formFieldData[i].options};
    }
    this.form = new FormGroup(formGroup);
  }
  ngOnInit() {
    this.fields = this.formFieldData;
  }

  submit(){
    if (this.form.valid) {
      console.log(JSON.stringify(this.model));
    }
  }

 


 
}
