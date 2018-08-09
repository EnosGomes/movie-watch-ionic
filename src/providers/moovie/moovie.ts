import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider'); 
  }

  getApiKey(): string{

    return "919c1d8ea32273a8d9615c607a9376ee";

  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

}
