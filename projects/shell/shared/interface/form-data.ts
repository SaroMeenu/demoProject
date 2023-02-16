export interface FormData {
    controlName: string;
    controlType: string;
    valueType?: string;
    currentValue?: string;
    placeholder?: string;
    options?: Array<{
      optionName: string;
      value: string;
     }>;
    validators?: {
      required?: boolean;
      minlength?: number;
      maxlength?: number;
    };
    label?:string;
    type?:string;

  }


  export interface FormFieldData {
    options?: Array<{
        key?: string;
        value?: string;
        label?: string;
     }>;
   
    label?:string;
    type?:string;
    className?:string;
    formControlName?:string;
  }