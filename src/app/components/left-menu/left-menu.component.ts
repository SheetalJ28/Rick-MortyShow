import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Output() selectedFilters: EventEmitter<any> = new EventEmitter<any>();

  filtersHeading: Array<string> = ["Species", "Gender", "Origin"];
  showFilters: boolean = true;
  filtersData: Array<any> = [
    ["Human", "Mythology", "Other Species..."],
    ["Male", "Female"],
    ["Unknown", "Earth (Replacement Dimension)", "Abadango", "Other Origins..."]
  ];
  filters: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectedFilter(event: any) {
    this.filters.push(event);
    this.selectedFilters.emit(event);
  }
  showFilter() {
    this.showFilters = !this.showFilters;
  }

}
