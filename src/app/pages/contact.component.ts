import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  name = "Contact"

  apiRoot: string = "https://29cdrxbieg.execute-api.us-east-1.amazonaws.com";
  constructor(private http: Http) { }

  public myform: FormGroup;
  public contactname: FormControl;
  public email: FormControl;
  public number: FormControl;
  public message: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.contactname = new FormControl('', [Validators.required,Validators.minLength(1)]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.number = new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]);
    this.message = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      contactname: this.contactname,
      email: this.email,
      number: this.number,
      message: this.message
    });
  }

  submitContactForm() {
    console.log(this.myform.value);
    if (this.myform.valid) {
      //submit contents to lambda function
        this.doPOST()
        this.myform.reset()
      }
    else {
      // still invalid
    }
  }
  doPOST() {
   console.log("POST");
   let url = `${this.apiRoot}/prod/contactform`;
    this.http.post(url, {
      name:this.myform.value.contactname,
      email:this.myform.value.email,
      number:this.myform.value.number,
      message:this.myform.value.message,
      website: "e-store template"
    }).subscribe(res => console.log(res.json()));
 }
}
// https://codecraft.tv/courses/angular/http/overview/
