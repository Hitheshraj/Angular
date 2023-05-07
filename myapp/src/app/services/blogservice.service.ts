import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostData } from '../blogposts/postdata.model';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private httpClient:HttpClient) { }
  dbPosts:PostData[] = [];
  isFetching=false;
  onCreatePost(title:string,content:string) {
    const mypostdata:PostData={title:title,content:content}
    console.log(mypostdata);
    return this.httpClient.post('https://myapphttapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', mypostdata
    );
    // subscribe((responseData) => {
    //   console.log(responseData);
    // });
  }
  fetchPosts() {
    return this.httpClient
     .get('https://myapphttapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'
    )
    .pipe(//as it is in form of key value pair
      map((responseData) => {
        const postArray = [];
        for (const key in responseData) {
          console.log({...responseData[key],id:key});
          postArray.push({...responseData[key],id:key});
        }
        return postArray;
      })
    );
  }
  onDeletePosts() {
    return this.httpClient.delete('https://myapphttapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/post.json');
}
deletepost(postid:string){
  return this.httpClient.delete('https://myapphttapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/post/'+postid+'.json');
 
}

}
