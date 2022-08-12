import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prefilled-form-data',
  templateUrl: './prefilled-form-data.component.html',
  styleUrls: ['./prefilled-form-data.component.scss']
})
export class PrefilledFormDataComponent implements OnInit {
  userdata={
    email:"Jaydip@gohil.com",
    password:"djkdkd",
    mobile:"973555555",
    address:"derod"
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.userdata.email);
  }
  submit(userform:any)
  {
    if(userform.valid)
    {
      console.log(userform.value);
    }
  }
}
