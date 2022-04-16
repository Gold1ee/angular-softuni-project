import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public username
  public userId

  public posts: any = []

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.userId = this.userService.getUserId()
    this.username = this.userService.getUsername()

    this.postService.getPosts().subscribe({
      next: result => {
        this.posts = Object.values(result)
        this.posts = this.posts.filter(post => {
          if (post._ownerId == this.userId) {
            return true
          }
          else {
            return false
          }
        })
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
