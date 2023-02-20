import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { of } from 'rxjs';
import { MortgageList } from 'projects/shell/shared/constants/mortgage-list';
import { MortgageService } from 'projects/shell/services/mortgage.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent {

  mortgageData : Array<any>= [];
  constructor(private formBuilder: FormBuilder,private mortgageService: MortgageService) {
  }

  ngOnInit(){
     this.getReverseMortgage();
  }

  getReverseMortgage() {
    this.mortgageService.getDataList().subscribe( (res:any)=>{
      this.mortgageData = res[0];
      console.log(this.mortgageData,res)
    })
  }
}
