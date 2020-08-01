import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts.component';
import { Data } from '../../fake backend/data.backend.data';
import { AgmCoreModule } from '@agm/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsComponent } from './google-maps/google-maps.component'
import { SalesService } from '../sales.service';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';




export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
    { path: 'gridview', component: GridViewComponent, data: { breadcrumb: 'Grid View' } },
    // { path: 'mapview', component: MapViewComponent,data: { breadcrumb: 'Map View' } },

];


@NgModule({
    declarations: [AccountsComponent,GoogleMapsComponent, GridViewComponent, MapViewComponent],
    imports: [
      AgmCoreModule,
      FormsModule,
      CommonModule,
      NgxPaginationModule,
      RouterModule.forChild(routes), ModalModule, SharedModule, HttpClientModule,
      InMemoryWebApiModule.forFeature(Data, { delay: 500 })
    ],
    providers: [SalesService],
    exports: [RouterModule],
    entryComponents: [


    ]
  })
  export class AccountsModule { }
