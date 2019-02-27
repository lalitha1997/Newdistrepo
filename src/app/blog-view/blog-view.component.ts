import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogserviceService } from "../blogservice.service";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
  
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, private blogservice: BlogserviceService, private blogHttpService: BlogHttpService,private location: Location, private toastr: ToastsManager, vcr: ViewContainerRef) {
 }

 ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }
  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }
    )
  }
  goBackToPreviousPage(): any {

    this.location.back();
  }
}


