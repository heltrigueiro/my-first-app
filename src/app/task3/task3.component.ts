import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  hideParagraph = true;
  secret = 'I love Angular!';
  secretProperty = 'Show secret';
  secretsList = [];

  constructor() { }

  ngOnInit() {
  }

  onClickButtonAddSecret() {
    this.secretsList.push(this.secret);
  }

  onClickButtonShowSecret() {
    this.hideParagraph = !this.hideParagraph;
    this.secretProperty === 'Show secret' ? this.secretProperty = 'Hide secret' : this.secretProperty = 'Show secret'
  }

  getBackgroundByIndex(i: number) {
    if (i >= 4) {
      return 'blue';
    }
    return 'white';
  }

  getColorByIndex(i: number) {
    if (i >= 4) {
      return 'afterFive';
    }
  }
}
