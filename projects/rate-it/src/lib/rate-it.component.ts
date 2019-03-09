import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ng-rate-it',
  template: `
    <div class="rate">
      <span class="item" *ngFor="let unit of rangeAsArray" [ngClass]="{ '-clickable': !isLocked }">
        <i *ngIf="unit <= newRate" class="icon {{ rateIconClass }}" [ngClass]="{ 'rate-icon' : !rateIconClass }" (click)="setRate(unit)"></i>
        <i *ngIf="unit > newRate" class="icon {{ placeholderIconClass }}" [ngClass]="{ 'placeholder-icon' : !placeholderIconClass }" (click)="setRate(unit)"></i>
      </span>
    </div>
  `,
  styles: [
    '.item { margin: 0 2px; font-size: 30px; }',
    '.item.-clickable { cursor: pointer; }',
    '.icon { font-style: normal; }',
    '.icon.rate-icon:before { content: \'\\02605\'; }',
    '.icon.placeholder-icon:before { content: \'\\02606\'; }'
  ]
})
export class RateItComponent implements OnInit {

  @Input() customClass: string;
  @Input() initialRate = 1;
  @Input() placeholderIconClass: string;
  @Input() range = 5;
  @Input() rateIconClass: string;
  @Input() isLocked = false;

  @Output() onChangeRate = new EventEmitter();

  newRate: number;
  rangeAsArray: number[];

  constructor() { }

  private _buildNumberArray(value: number): number[] {
    const array = [];

    for (let i = 1, length = value; i <= length; i++) {
      array.push(i);
    }

    return array;
  }

  ngOnInit() {
    this.newRate = this.initialRate;
    this.rangeAsArray = this._buildNumberArray(this.range);
  }

  setRate(rate: number) {
    if (!this.isLocked) {
      this.newRate = rate;
      this.onChangeRate.emit({ newRate: rate });
    }
  }

}
