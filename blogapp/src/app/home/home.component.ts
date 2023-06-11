import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogAppService } from '../services/blog-app.services';
import { blog } from './blog.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private blogService: BlogAppService) { }
 
  Posts: blog[] = [];
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.blogService.fetchposts().subscribe(
      (response: any) => {
        this.Posts = response;
        console.log(response);
      }
    );
  }
}
