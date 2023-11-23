import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  changeSearchValue(){
    //console.log((<HTMLInputElement>eventData.target).value);
    //this.searchValue = (<HTMLInputElement>eventData.target).value;
    this.searchTextChanged.emit(this.searchValue);
  }
}
