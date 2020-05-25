import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  @Input('filters') filters: Array<any> = ["human", "abcd"];
  @Output() searchName: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortData: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteFilter: EventEmitter<any> = new EventEmitter<any>();

  filtersHeading: string = "Selected Filters";

  constructor() { }

  ngOnInit(): void {
  }

  delete(filter: string, index: number) {
    this.deleteFilter.emit(index);
    console.log(filter, index);
  }
  searchByName(name: string) {
    this.searchName.emit(name);
  }
  onChange(event: any) {
    this.sortData.emit(event.target.value);
    console.log(event);
  }

}
