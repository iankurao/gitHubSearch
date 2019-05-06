import { Component, OnInit } from '@angular/core';
import { GhApiService } from '../gh-api.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user:any;
  repos:any;
  username:any;
  constructor(private _githubService: GhApiService) { 
    this._githubService.getUser().subscribe(user =>{
      this.user = user;
    });

    this._githubService.getRepo().subscribe(repos =>{
      this.repos = repos;
    });
    
  }

  search(){
      this._githubService.newUsername(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      });
      this._githubService.getRepo().subscribe(repos => {
        this.repos = repos;
      });
  }

  ngOnInit() {
  }

}
