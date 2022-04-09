import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public testArr: any = [1, 2, 3, 4, 5]
  public posts: any = []


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: result => {
        this.posts = Object.values(result)
        this.posts.reverse()
        console.log(this.posts);
        

      },
      complete: () => {

      },
      error: (err) => {

      }
    })
    console.log(this.posts);

  }

  trackByFn() {

  }

}
