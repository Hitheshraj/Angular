import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogAppService } from '../services/blog-app.services';
import { blog } from '../home/blog.interface';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddBlogComponent {
  content: string = '';
  contentLen: number = 0;
  blogAdded: boolean = false;
  title: string;
  file: File = null;

  total: number=150;


  quantity: number=1;


  offer: number=10;


  subtotal: number=160;
 


  isCart: boolean = false;

  
  isCatalog: boolean = false;

  isError: boolean = false;
  isSuccess: boolean = false;
  message: String;

  constructor(private blogService: BlogAppService) {}

  onChange(event) {
    this.file = event.target.files[0];
  }

  updateContentLen() {
    const content_list = this.content.split(' ').filter((elem) => elem != '');
    this.contentLen = content_list.length;
  }

  onBlogSubmit(blogData: blog, form: NgForm) {
    console.log(blogData);
    this.blogService.createPost(blogData).subscribe(() => {
      this.title = blogData.title;
      this.blogAdded = true;
      form.reset();
      this.contentLen = 0;
      setTimeout(() => {
        this.blogAdded = false;
      }, 5000);
    });
  }
}