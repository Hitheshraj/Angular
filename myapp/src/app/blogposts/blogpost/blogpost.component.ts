import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostData } from '../postdata.model';
import { HttpClient } from '@angular/common/http';
import { BlogpostService } from 'src/app/services/blogservice.service';



@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  @Input()
  post:PostData;

  @Output()
  postDeleted=new EventEmitter<PostData>();

  constructor(private blogPostService:BlogpostService) { }
 
  ngOnInit(): void {
  }
  onPostDelete(){
   
   this.blogPostService.deletepost(this.post.id).subscribe(()=>{
    console.log('Deleting'+this.post.id);
    this.postDeleted.emit();
   });
  }
}
