import { Component, OnInit } from '@angular/core';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blog = [];

  constructor(private _blogService : BlogService) {


  }
  ngOnInit(): void {
    this._blogService.getAllBlog().subscribe(res => {
      this.blog= res;
    });
  }
}

