import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiveBlogService} from '../../services/BlogService/LiveBlogService';
import {Blog} from '../../models/blog';
import {Institution} from '../../models/institution';
import {LiveInternshipService} from '../../services/InternshipService/LiveInternshipService';
import {Internship} from '../../models/internship';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id: number;
  blog: Blog;
internhip: Internship;
  internships: Internship[] = [];


  constructor(private route: ActivatedRoute,
              private blogService: LiveBlogService,
              private internshipService: LiveInternshipService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('Found ID from route: ' + this.id);

      this.internshipService.getAll().subscribe(res => {
        this.internships = res;

        for (const inter of this.internships){
          if (inter.blog.id === this.id) {
            this.internhip = inter;
          }
        }
      });

      this.blogService.get(this.id).subscribe(res => {
        this.blog = res,
          console.log('Found Blog: ' + JSON.stringify(res));
      });

    });
  }


}
