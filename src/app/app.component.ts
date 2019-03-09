import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialValue = 0;
  rateValue = 0;
  lock = false;

  changeRate(event: { newRate: number; }) {
    this.rateValue = event.newRate;
  }

  ngOnInit() {}
}
