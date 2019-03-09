import {
  Component,
  OnInit,
  SimpleChanges,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'rate-it',
  template: `
    <div class="rate {{ customClass}}">
      <span class="item" *ngFor="let unit of rangeAsArray">
        <i *ngIf="unit <= newRate" class="icon {{ rateIconClass }}" [ngClass]="{ 'rate-icon' : !rateIconClass }" (click)="setRate(unit)"></i>
        <i *ngIf="unit > newRate" class="icon {{ placeholderIconClass }}" [ngClass]="{ 'placeholder-icon' : !placeholderIconClass }" (click)="setRate(unit)"></i>
      </span>
    </div>
  `,
  styles: [
    '.item { cursor: pointer; margin: 0 2px; font-size: 30px; }',
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
  }

  ngOnChanges(changes: SimpleChanges) {
    this.rangeAsArray = this._buildNumberArray(changes.range.currentValue);
  }

  setRate(rate: number) {
    if (!this.isLocked) {
      this.newRate = rate;
      this.onChangeRate.emit({ newRate: rate });
    }
  }

}
