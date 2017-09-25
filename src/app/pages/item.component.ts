import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item }    from './../models/item';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './../app.component';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams } from 'ngx-facebook';


@Component({
    selector: 'search',
    templateUrl: './item.component.html'
  })

export class ItemComponent {


  private sub: any;
  public item = new Item('','');
  logginSpinner = "none"
  category = "All"
  name = ""
  currentImage = ""

  constructor(private http: HttpClient, private route: ActivatedRoute,private fb: FacebookService) {
    console.log('Initializing Facebook');

    fb.init({
      appId: '130546614260311',
      version: 'v2.10'
    });
  }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.logginSpinner = "inherit"
         this.category = params['category'];
         this.name = params['name']
         this.http.get('https://29cdrxbieg.execute-api.us-east-1.amazonaws.com/prod/getitem?table=item&category=' + this.category + '&name=' + this.name).subscribe(data => {
               this.setItem(data)
               this.logginSpinner = "none"
             });
      });
    }

    setItem(data) {
      var item = new Item('','')
      item.setAttributes(data["Item"])
      this.item = item
      this.currentImage = this.item.mainImage
    }

    updateImage(image) {
      this.currentImage = image
    }

}
