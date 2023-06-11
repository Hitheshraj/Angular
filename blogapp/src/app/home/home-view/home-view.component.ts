import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogAppService } from 'src/app/services/blog-app.services';
import { blog } from '../blog.interface';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  @Input()
  blogInp: blog;
  available:false;
  @Output()
  postDeleted = new EventEmitter<{ deleted: boolean }>();
  constructor(private blogService: BlogAppService ) { }

  ngOnInit(): void {
   
    
  }
  onDeletePost() {
    this.blogService.DeletePost(this.blogInp.id).subscribe(() => {
      this.postDeleted.emit({ deleted: true });
    });
  }
 
}
