import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

// firebase service
export class DataServiceService {

  constructor(private http : HttpClient) { }
  getPosts(){
    return this.http.get('https://angular-app-93af9.firebaseio.com/savedUrls.json')
    
  }
  addPosts(data: any){
    return this.http.post('https://angular-app-93af9.firebaseio.com/savedUrls.json',data)
  }
  deletePosts(id: any){
    return this.http.delete(`https://angular-app-93af9.firebaseio.com/savedUrls/${id}.json`)
  }
}
