import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
import { Router } from '@angular/router';
import { GoogleMapsComponent } from '../../analytics/dashboard/google-maps/google-maps.component';

@Component({
  selector: 'app-project-maps',
  templateUrl: './project-maps.component.html',
  styleUrls: ['./project-maps.component.scss'],
  encapsulation: ViewEncapsulation.None,
    providers:[GoogleMapsComponent]
})
export class ProjectMapsComponent implements OnInit {
  public lat: number = 43.653963;
  public lng: number = -79.387207;
  public latnew: number = 44.0007518;
  public lngnew: number = -79.4372217;
  public latnew2: number = 45.2603984;
  public lngnew2: number = -75.8082383;
  public latnew3: number = 46.22545288;
  public lngnew3: number = -80.33203125;
  public latnew4: number = 42.52069953;
  public lngnew4: number = -81.87011719;
  public zoom: number = 4;
  public settings: Settings;
ngOnInit(){
  
}
  @Input('markerClickable') clickable: boolean = true;
  @Input() openInfoWindow: boolean = true;

  constructor(public appSettings: AppSettings,private _router:Router) {
    this.settings = this.appSettings.settings;
  }
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */

  openWindow(e) {
    window.open("/#/IBW/sales/projectdashboard", "_blank");
    // this._router.navigateByUrl("/IBW/sales/projects");
  }
}
