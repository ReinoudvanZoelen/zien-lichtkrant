import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiveBlogService} from '../../services/BlogService/LiveBlogService';
import {Blog} from '../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id: number;
  blog: Blog;

  constructor(private route: ActivatedRoute,
              private blogService: LiveBlogService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('Found ID from route: ' + this.id);
      this.blogService.get(this.id).subscribe(res => {
        this.blog = res,
          console.log('Found Blog: ' + JSON.stringify(res))
      });

    });
  }


}
