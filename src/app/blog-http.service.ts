import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlogId;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'MDkzYWE1MGUyMzQwMjE5YTM4NGJjM2ZkNWY1ZWZiYmJjMDY5NzZkNGZkOTg5OWFmNjJlMTU1MDNhZGRhMjJhNTg4ZWY2M2U1MTRhMWI4MjI5NjlmMGIxODdjMDU1ZjgxMjNmYzMwZmIyNGEwMzRmYmMxMTcxNjZmNjg5YjliNmJmOA==	';

  constructor(private _http: HttpClient) {

    console.log("BlogHttpService is called")
  }
  getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken)
    return myResponse;
  }
                                                 

  getSingleBlog(blogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + blogId + '?authToken=' + this.authToken)
    return myResponse;
  }
  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } 
  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }

  editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }

}
