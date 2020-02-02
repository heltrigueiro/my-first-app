import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  incrementingNumber = 1;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    if (this.incrementingNumber < 1) {
      this.incrementingNumber = 1;
    }

    this.interval = setInterval(() => {
      this.gameStarted.emit(this.incrementingNumber);
      this.incrementingNumber++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }
}
