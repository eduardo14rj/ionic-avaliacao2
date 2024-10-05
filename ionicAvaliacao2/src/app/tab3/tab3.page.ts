import { Component } from '@angular/core';
import { User } from '../interface/user';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public load: boolean = false;
  public users: User[] = [];
  public search: string = "";
  constructor(private github: GithubService) { }

  public SearchChange() {
    if (this.search.length < 3) {
      alert("É necessário ter pelo menos 3 caracteres...");
      return;
    }
    this.load = true;
    this.github.searchUsers(this.search).subscribe((d) => {
      this.users = d.items;
      this.load = false;
    });
  }

}
