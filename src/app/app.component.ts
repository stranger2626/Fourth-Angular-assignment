import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameTicks = [];

  onGameTickAdded(tickData: {count: number}) {
    this.gameTicks.push({
      count: tickData.count
    });
  }
}
