import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  baseUrl = 'http://localhost:56507/'
  constructor(private _http:HttpClient) {


   }
   getAllBlog() :Observable<any> {
  
    return this._http.get<Blog[]>(this.baseUrl + 'Blog',);       
  }
}
