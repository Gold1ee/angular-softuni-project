import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePostDto, PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-apost',
  templateUrl: './edit-apost.component.html',
  styleUrls: ['./edit-apost.component.css']
})


export class EditApostComponent implements OnInit {

  public postData: any
  private postId: string

  editPostFormGroup: FormGroup = this.formBuilder.group({
    'postName': new FormControl('', [Validators.required]),
    'imageUrl': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder, private postService: PostService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id']

      this.postService.getPost(this.postId).subscribe(post => {
        this.postData = post
      })
    })
  }

  postHandler() {
    let { postName, imageUrl, description } = this.editPostFormGroup.value
    if(!postName){
      postName = this.postData.postName
    }
    if(!imageUrl){
      imageUrl = this.postData.imageUrl
    }
    if(!description){
      description = this.postData.description
    }
    const body = {
      _id: this.postData._id,
      postName: postName,
      imageUrl: imageUrl,
      description: description,
      _ownerId: this.userService.getUserId(),
    }

    this.postService.editPost$(body,this.postId).subscribe({
      next: result => {
        this.router.navigate([`/catalog/details/${this.postId}`])

      },
      complete: () => {
        console.log('edited');

      },
      error: (err) => {
      }
    })
  }
}
