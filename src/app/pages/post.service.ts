import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface CreatePostDto { postName: string, imageUrl: string, description: string, _ownerId: string, }
interface IPost {
  postName: string,
  imageUrl: string,
  description: string,
  _id: string,
  _ownerId: string,

}

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) { }


  createPost$(postData: CreatePostDto): Observable<IPost> {
    return this.httpClient.post<IPost>(`${environment.apiUrl}jsonstore/posts`, postData)
  }

  getPosts(): Observable<IPost> {
    return this.httpClient.get<IPost>(`${environment.apiUrl}jsonstore/posts`)
  }
}
