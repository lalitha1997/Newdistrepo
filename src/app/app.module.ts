import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogserviceService } from './blogservice.service';
import { BlogHttpService } from './blog-http.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogEditComponent,
    BlogViewComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogMainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component:AboutComponent},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [BlogserviceService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
