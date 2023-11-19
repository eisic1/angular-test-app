import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButton: string = 'All';

  @Output()
  filterButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChanged(){
    this.filterButtonChanged.emit(this.selectedRadioButton);
    //console.log(this.selectedRadioButton);
  }
}
