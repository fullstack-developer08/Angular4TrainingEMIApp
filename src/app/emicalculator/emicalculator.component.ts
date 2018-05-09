import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
  isFieldEmpty: boolean = false;
  emiValue:number;
  constructor() { }

  ngOnInit() {
  }

  submit(formData){
    if(formData.value.loanAmount === '' || formData.value.interestRate === '' || formData.value.loanTerm === ''){
      this.isFieldEmpty = true;
    } else {
      let loanAmount = formData.value.loanAmount;
      let interestRate = formData.value.interestRate;
      let loanTerm = formData.value.loanTerm;
      this.emiValue = (interestRate/100*loanAmount)/12;
    }

  }

}
