import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostData } from './postdata.model';
import { BlogpostService } from '../services/blogservice.service';


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
  dbPosts: PostData[] = [];
  isFetching = false;
  errorMessage:null;
  constructor(private httpClient: HttpClient, private blogPostServices: BlogpostService) { }

  ngOnInit(): void {
    //this.fetchPosts();
    this.fetchPosts();
  }
  // onCreatePost(postData:{title:string,conatent:string})
  onCreatePost(postData: PostData, form: NgForm) {
    this.blogPostServices.onCreatePost(postData.title, postData.content)
    .subscribe((responseData) => {
      //this.fetchPosts();
      console.log(responseData);
      this.fetchPosts();
      form.reset();
    });
    
  }
  onFetchPosts() {
    this.fetchPosts();
  }
  fetchPosts() {
    this.isFetching = true;
    this.blogPostServices.fetchPosts()
    .subscribe((posts) => {
      this.dbPosts = posts;
      this.isFetching = false;
    },
    (error)=>{
     this.errorMessage=error.errorMessage;
    });
  }
  onDeletePosts() {
    this.blogPostServices.onDeletePosts().subscribe(() => {
      console.log('post deleted');
      this.fetchPosts();
    });
    this.fetchPosts();
  }
  onSinglePostDeleted(deletepost:PostData){
    console.log("from parent : single Post data");
    this.fetchPosts();
  }
  // emp(){
  //   this.httpClient.get(' http://localhost:3000/employes').subscribe((responseData)=>{
  //   console.log(responseData);
  //   });
  // }
}