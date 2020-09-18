import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BlogService } from './service/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    //BlogService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //BlogService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
