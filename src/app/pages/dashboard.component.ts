import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item }    from './../models/item';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../app.component.css']
})
export class DashboardComponent {

  name = "dashboard"
  public items = []

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://29cdrxbieg.execute-api.us-east-1.amazonaws.com/prod/getitems?table=item').subscribe(data => {

          this.addItems(data)
        });
    }

    addItems(items) {
      for(var i = 0; i < items.Items.length; i++) {
        var item = new Item('','')
        item.setAttributes(items["Items"][i])
        this.items.push(item)
      }
    }

}
