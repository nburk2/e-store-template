import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category }    from './models/category';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isNavbarCollapsed = false
    public category = "All"
    public keyphrase = "";
    public categories = []
    private sub: any;

    constructor(private http: HttpClient, public router: Router, private route: ActivatedRoute) {}
    ngOnInit() {
      console.log("child params: ")

      this.http.get('https://29cdrxbieg.execute-api.us-east-1.amazonaws.com/prod/getitems?table=category').subscribe(data => {
            this.addCategories(data)
          });
      }

    addCategories(categories) {
      for(var i = 0; i < categories.Items.length; i++) {
        var category = new Category('')
        category.setAttributes(categories["Items"][i])
        if(category.searchable) {
            this.categories.push(category)
        }
      }
    }

    categoryEvent(selectedCategory) {
        this.category = selectedCategory.currentTarget.value
    }

    // searchWordsEvent(words) {
    //     this.searchWords = words.currentTarget.value
    // }

    search() {
      console.log('/search/' + this.category + '/' + (this.keyphrase == "" ? "none" : this.keyphrase))
      // this.router.navigateByUrl('/search?category=' + this.category + "&searchWords=" + this.searchWords)
      this.router.navigateByUrl('/search/' + this.category + '/' + (this.keyphrase == "" ? "none" : this.keyphrase))
    }

}
// https://startangular.com/product/sb-admin-bootstrap-4-angular-4/
