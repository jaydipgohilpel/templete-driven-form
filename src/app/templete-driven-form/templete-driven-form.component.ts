import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.scss']
})
export class TempleteDrivenFormComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(formdata: any) {
    if (formdata.valid) {
      console.log(formdata.value);
    }
  }
 
}
