import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timeCounter;
  counter: number = 0;
  @Output('tickGenerated') tickGenerated = new EventEmitter<{count: number}>();
  ngOnInit() {
  }

  onGameStart() {
    this.timeCounter = setInterval(() => {
     this.onGameTick(this.counter);
    }, 1000);
  }

  onGameTick(tickCount) {
    this.counter++;
    this. tickGenerated.emit({
      count: tickCount
    });
  }

  onGameStop() {
    clearInterval(this.timeCounter);
  }
}
