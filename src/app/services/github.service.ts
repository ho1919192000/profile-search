import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable"; // <- add this import to solve TS4053 
@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'cd34965ee1f96446dd63';
  private client_secret = '26ae03aeea9ce79f074e13686ab538718f8d00f3';    
  
  constructor(private _http: Http) { 
      console.log('Github Service Ready..');
      this.username = 'ho1919192000';
  }
  getUser(){
      return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }
    
  getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }
  updateUser(username: string){
        this.username = username;
  }

}
