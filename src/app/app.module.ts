import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';


import { AppComponent }  from './app.component';
import { DashboardComponent }  from './pages/dashboard.component';
import { NewComponent }  from './pages/new.component';
import { SearchComponent }  from './pages/search.component';
import { AboutComponent }  from './pages/about.component';
import { ContactComponent }  from './pages/contact.component';
import { ItemComponent }  from './pages/item.component';
import { RedirectComponent }  from './redirect.component';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SearchService } from './services/search.service';
import {HttpClientModule} from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'search/:category/:keyphrase',
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'item/:category/:name',
        component: ItemComponent
      },
      {
        path: 'admin',
        component: RedirectComponent,
      },
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NewComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    ItemComponent,
    RedirectComponent
  ],
    providers: [
        SearchService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
