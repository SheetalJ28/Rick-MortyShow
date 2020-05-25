import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { RestServiceService } from './services/rest-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LeftMenuComponent,
    FiltersComponent,
    SearchFiltersComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
