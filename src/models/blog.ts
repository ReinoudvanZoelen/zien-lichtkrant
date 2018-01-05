import {User} from './user';

export class Blog {
  id: number;
  creator: User;
  approvedBy: User;
  title: string;
  summary: string;
  accepted: Boolean;
  rejected: Boolean;
  date: Date;
  content: string;
  summaryImage: Blob;
  contentImage: Blob;

  constructor(id?: number, creator?: User, approvedBy?: User, title?: string, summary?: string, accepted?: Boolean,
              rejected?: Boolean, date?: Date, content?: string, summaryImage?: Blob, contentImage?: Blob) {
    this.id = id;
    this.creator = creator;
    this.approvedBy = approvedBy;
    this.title = title;
    this.summary = summary;
    this.accepted = accepted;
    this.rejected = rejected;
    this.date = date;
    this.content = content;
    this.summaryImage = summaryImage;
    this.contentImage = contentImage;
  }
}
