import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateAPostComponent } from './create-apost/create-apost.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { EditApostComponent } from './edit-apost/edit-apost.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    CreateAPostComponent,
    BlogDetailsComponent,
    BlogSingleComponent,
    EditApostComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
