import {Blog} from './blog';
import {User} from './user';
import {Institution} from './institution';
import { InternshipRoute } from 'models/internshipRoute';

export class Internship {

  id: number;
  active: boolean;
  semester: number;
  summary: String;
  title: String;

  startDate: Date;
  endDate: Date;

  blog: Blog;
  internshipRoute: InternshipRoute;
  user: User;
  institution: Institution;

  constructor(id?: number, active?: boolean, semester?: number, summary?: String, title?: String,
    startDate?: Date, endDate?: Date, blog?: Blog, internshipRoute?: InternshipRoute, user?: User, institution?: Institution) {
      this.id = id;
      this.active = active;
      this.semester = semester;
      this.summary = summary;
      this.title = title;

      this.startDate = startDate;
      this.endDate = endDate;

      this.blog = blog;
      this.internshipRoute = internshipRoute;
      this.user = user;
      this.institution = institution;
  }
}
