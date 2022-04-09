import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  public postData

  constructor(private route: ActivatedRoute, private postService: PostService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']

      this.postService.getPost(id).subscribe(post => {
        this.postData = post
  
      })
    })
  }

  deleteHandler(){
    this.postService.deletePost$(this.postData._id).subscribe()
    this.router.navigate(['/catalog'])
  }

}
