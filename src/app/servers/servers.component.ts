import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  showUserAdded = false;
  userName = 'Input your name here!';

  constructor() { }

  ngOnInit() {
  }

  onInputEvent(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;

    this.allowNewServer = this.userName !== '';
    this.showUserAdded = false;
  }

  updateName() {
    if (this.userName !== 'Input your name here!') {
      return this.userName;
    }
  }

  onClickButton() {
    if (this.userName  !== '' && this.userName !== 'Input your name here!') {
      this.showUserAdded = true;
    }
  }

  resetName() {
    this.userName = '';
    this.showUserAdded = false;
    this.allowNewServer = false;
  }
}
