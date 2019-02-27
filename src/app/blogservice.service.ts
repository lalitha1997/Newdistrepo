import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "",
      "created": "2019-jan-15",
      "tags": [],
      "author": "lalitha",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 1",
      "description": "This is description for blog 1",
      "title": "Blog1"
    },
    {
      "blogId": "2",
      "lastModified": "",
      "created": "2019-jan-16",
      "tags": [],
      "author": "lalitha",
      "category": "funny",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 2",
      "description": "This is description for blog 2",
      "title": "Blog2"
    },
    {
      "blogId": "3",
      "lastModified": "",
      "created": "2019-jan-17",
      "tags": [],
      "author": "lalitha",
      "category": "tragedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog 3",
      "description": "This is description for blog 3",
      "title": "Blog3"
    }
  ]
  public currentBlog:any;

  constructor() { }
  public getallBlogs(): any
   {
    return this.allBlogs;
  }
  public getSingleBlogInfo(currentBlogId) :any {
    for(let blog of this.allBlogs)
    {
      if(blog.blogId == currentBlogId)
       this.currentBlog=blog;
    }
    return this.currentBlog;
  }
  
}
 