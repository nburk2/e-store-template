import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item }    from './../models/item';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './../app.component';
import { trigger, state, style, transition, animate, group } from '@angular/animations';


@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./../app.component.css']
  })

export class SearchComponent {

  category = "";
  keyphrase = "";
  private sub: any;
  name = "Search"
  public items = []
  logginSpinner = "none"

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.items = []
        this.logginSpinner = "inherit"
       this.category = params['category'];
       this.keyphrase = params['keyphrase']
       var url = this.generateUrl()
       this.http.get(url).subscribe(data => {
             this.addItems(data)
             this.logginSpinner = "none"
           });
       // In a real app: dispatch action to load the details here.
    });
    }

    addItems(items) {
      for(var i = 0; i < items.Items.length; i++) {
        var item = new Item('','')
        item.setAttributes(items["Items"][i])
        this.items.push(item)
      }
    }

    generateUrl() {

      var url = 'https://29cdrxbieg.execute-api.us-east-1.amazonaws.com/prod/getitems?table=item&category=' + this.category
      url = url + '&keyphrase=' + this.keyphrase
      return url
    }

}
