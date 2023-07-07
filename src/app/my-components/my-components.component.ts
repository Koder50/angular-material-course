import { CommonModule } from '@angular/common';
import {Component, HostListener, OnInit} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';



@Component({
  selector: "my-components",
  templateUrl: 'my-components.component.html',
  styleUrls: ["my-components.component.scss"]
  // standalone: true,
  // imports: [MatFormFieldModule,MatFormFieldModule,ReactiveFormsModule, MatInputModule,MatAutocompleteModule,CommonModule],
})
export class MyComponentsComponent implements OnInit {

  options: string[]=["One","Two","Three"];

  myControl = new FormControl('');

  isChecked: boolean=false;

  inputValue: number=0;

  isProgressSpinnerOn: boolean=true;

  show: boolean=false;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit() {
    // setInterval(()=>{
    //   this.inputValue==0 ? this.inputValue=100 : this.inputValue=0;
    // },2000);
    
  }

  toggleCheck(event: boolean) {
    this.isChecked=event;
  }

  changeValue(event: string) {
    if((Number(event) && Number(event)>=0 && Number(event)<=100) || event=="0") {
      this.inputValue = Number(event);
    }
    else if(event=='') this.inputValue=0;
  }

  changeValueOfRadioButton(event: string) {
    if(event=="Progress spinner on") this.isProgressSpinnerOn=true;
    else if(event=="Progress spinner off") this.isProgressSpinnerOn=false;
  }

  toggleShow() {
    this.show=!this.show;
  }

}
