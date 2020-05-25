import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input('filterHeading') filterHeading: string = '';
  @Input('filterArray') filterArray: Array<string> = [];
  @Input('indexID') indexID: string = '';
  @Output() selectedFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  checkedInput(event: any, filterCat: string) {
    let filter = {
      "name": filterCat,
      "checked": event,
      "category": this.filterHeading
    }
    this.selectedFilter.emit(filter);
    // console.log(filter);
  }

}
