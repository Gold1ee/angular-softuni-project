import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreatePostDto, PostService } from '../post.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-apost',
  templateUrl: './create-apost.component.html',
  styleUrls: ['./create-apost.component.css']
})
export class CreateAPostComponent implements OnInit {


  errorMessage: string = ""

  createPostFormGroup: FormGroup = this.formBuilder.group({
    'postName': new FormControl('', [Validators.required]),
    'imageUrl': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder, private postService: PostService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  postHandler(): void {
    const { postName, imageUrl, description } = this.createPostFormGroup.value
    const body: CreatePostDto = {
      postName: postName,
      imageUrl: imageUrl,
      description: description,
      _ownerId: this.userService.getUserId(),
    }
    this.errorMessage = ""
    this.postService.createPost$(body).subscribe({
      next: result => {
        this.router.navigate(['/catalog'])

      },
      complete: () => {
        console.log('posted');

      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
  }

}
