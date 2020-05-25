import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import filters from '../../models/data-filter';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input('filtersData') filtersData: any = [];
  @Output() selectedFilters: EventEmitter<any> = new EventEmitter<any>();

  filtersHeading: Array<string> = ["Species", "Gender", "Origin"];
  showFilters: boolean = true;
  // filtersData: Array<any> = [
  //   ["Human", "Mythology", "Other Species..."],
  //   ["Male", "Female"],
  //   ["Unknown", "Earth (Replacement Dimension)", "Abadango", "Other Origins..."]
  // ];
  // filtersData: Array<any> = filters;
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
