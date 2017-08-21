import { NgModule }      from '@angular/core';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';


import { AppComponent }  from './app.component';
import { DashboardComponent }  from './pages/dashboard.component';
import { NewComponent }  from './pages/new.component';
import { SearchComponent }  from './pages/search.component';
import { AboutComponent }  from './pages/about.component';
import { ContactComponent }  from './pages/contact.component';
import { RedirectComponent }  from './redirect.component';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
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
        path: 'search',
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
    RedirectComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
