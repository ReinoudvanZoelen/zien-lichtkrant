import {Blog} from './blog';
import {User} from './user';
import {Institution} from './institution';

export class Internship {
  id: number;

  blog: Blog;

  active: boolean;
  rejected: boolean;

  title: string;
  summary: string;
  summaryImage: string;
  content: string;
  contentImage: string;

  creator: User;
  date: Date;
  startDate: Date;
  endDate: Date;

  institution: Institution;
  semester: number;
  user: User;



  constructor(id: number, blog: Blog, active: boolean, rejected: boolean, title: string, summary: string, summaryImage: string, content: string, contentImage: string, creator: User, date: Date, startDate: Date, endDate: Date, institution: Institution, semester: number, user: User) {
    this.id = id;
    this.blog = blog;
    this.active = active;
    this.rejected = rejected;
    this.title = title;
    this.summary = summary;
    this.summaryImage = summaryImage;
    this.content = content;
    this.contentImage = contentImage;
    this.creator = creator;
    this.date = date;
    this.startDate = startDate;
    this.endDate = endDate;
    this.institution = institution;
    this.semester = semester;
    this.user = user;
  }
}
