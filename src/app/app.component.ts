import { Component } from '@angular/core';
import { RestServiceService } from './services/rest-service.service';
import filters from './models/data-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ricky & Morty App';
  filters: Array<any> = [];
  results: any;
  allResults: any;
  filtersData: Array<any> = filters;

  constructor(private _rest: RestServiceService) { }

  ngOnInit(): void {
    this._rest.getCharacters().subscribe(data => {
      this.allResults = data.results;
      this.results = Object.assign(this.allResults);
    });
  }

  selectedFilters(event: any) {
    if (event.checked) {
      this.filters.push(event);
      let searchResults = this.searchData(event.category.toLowerCase(), event.name, this.results);
      this.results = searchResults;
    } else {
      let index = this.filters.findIndex(x => x.name === event.name);
      this.deleteFilter(index);
    }
  }
  deleteFilter(index: number) {
    let tempFilter = this.filters[index];
    this.filtersData.forEach(elem => {
      elem.data.filter(item => {
        if( item.data.toLowerCase() === tempFilter.name.toLowerCase()) {
          item.checked = false;
          return;
        }
      });
    })
    this.filters.splice(index, 1);
    if (this.filters.length > 0) {
      let searchAll = this.allResults;
      this.filters.forEach(elem => {
        let searchResults = this.searchData(elem.category.toLowerCase(), elem.name, searchAll);
        searchAll = searchResults;
      });
      this.results = searchAll;
    }
    else {
      this.results = Object.assign(this.allResults);
    }

  }
  searchName(event: string) {
    let searchResults;
    if (event) {
      searchResults = this.searchData('name', event, this.results);
    } else {
      searchResults = this.allResults;
    }
    this.results = searchResults;
  }

  searchData(key: string, search: string, data: any) {
    let searchedResults = data.filter(element => {
      if (!element.hasOwnProperty(key)) {
        return 0;
      } else
        if (typeof element[key] == 'string') {
          return element[key].toLowerCase().includes(search.toLocaleLowerCase());
        } else {
          return element[key].name.toLowerCase().includes(search.toLocaleLowerCase());
        }
    });
    return searchedResults;
  }
  sortData(event: string) {
    this.results.sort(this.compareValues('id', event));
  }
  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
