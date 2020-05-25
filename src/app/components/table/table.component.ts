import { Component, OnInit, Input } from '@angular/core';
import { RestServiceService } from './../../services/rest-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('results') results: any;

  constructor(private _rest: RestServiceService) { }
  // results: any;

  ngOnInit(): void {
    // this._rest.getCharacters().subscribe(data => {
    //   this.results = data.results;
    //   console.log(this.results);
    // })
 }

}
