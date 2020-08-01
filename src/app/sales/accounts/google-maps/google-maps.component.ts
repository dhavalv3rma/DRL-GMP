import { Component } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
//declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html'
})
export class GoogleMapsComponent {
  public pointers = [{"lat":32.7767,"lng":-96.7970},{"lat":41.8781,"lng":-87.6298},{"lat":32.7157,"lng":-117.1611},{"lat":37.7749,"lng":-122.4194},{"lat":49.2827,"lng":-123.1207}];
   public lat: number = 36.1699;
   public lng: number = -115.1398;
  // public latnew: number = 32.7157;
  // public lngnew: number = -117.1611;
  // public latnew2: number = 32.7767;
  // public lngnew2: number = -96.7970;
  // public latnew3: number = 41.8781;
  // public lngnew3: number = -87.6298;
  // public latnew4: number = 45.5017;
  // public lngnew4: number = -73.5673;
  public zoom: number = 4;
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */
}