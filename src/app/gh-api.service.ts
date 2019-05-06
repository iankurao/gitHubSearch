import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Repository } from './repository';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GhApiService {

  private username = "iankurao";
  constructor(private http: HttpClient) { 
    console.log("github service started...");
  }

  newUsername(username:string){
    this.username = username;
  }
  getUser(): Observable<Repository[]>{  
    return this.http.get<Repository[]>(environment.url+'users/'+this.username+'?access_token='+environment.token);
  
  }
  getRepo(): Observable<Repository[]>{  
    return this.http.get<Repository[]>(environment.url+'users/'+this.username+'/repos?access_token='+environment.token);
  
  }
  

}

