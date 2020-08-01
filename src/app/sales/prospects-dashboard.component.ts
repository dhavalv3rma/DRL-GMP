import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prospects-dashboard',
  templateUrl: './prospects-dashboard.component.html',
  styleUrls: ['./prospects-dashboard.component.scss']
})
export class ProspectsDashboardComponent1 implements OnInit {
  public link: string;
  public description: {};
  public breadcrumbs: {
      name: string;
      url: string
  }[] = [];

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute) { 
      this.description = {
          "TIMELINE" : " This page is used to manage timeline information.",
          "SEQUENCE" : " This page is used to manage sequence information.",
          "NOTES" : " This page is used to manage notes information.",
          "EMAILS" : " This page is used to manage emails information.",
          "MESSAGES" : " This page is used to manage messages information.",
          "LINKEDIN" : " This page is used to manage linkedin information.",
          "CALLS" : " This page is used to manage calls information.",
          "OPPORTUNITIES" : " This page is used to manage opportunities information.",
          "LEADS" : " This page is used to manage leads information.",
          "CONTACTS" : " This page is used to manage contacts information.",
          "MEETINGS" : " This page is used to manage meetings information.",
          "ALERTS" : " This page is used to manage alerts information.",
      };
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.breadcrumbs = [];
            this.parseRoute(this.router.routerState.snapshot.root);
            //this.link = this.breadcrumbs[2]['name'];
        }
      })
    }
    private parseRoute(node: ActivatedRouteSnapshot) {
      if (node.data['breadcrumb']) {
          if (node.url.length) {
              let urlSegments: UrlSegment[] = [];
              node.pathFromRoot.forEach(routerState => {
                  urlSegments = urlSegments.concat(routerState.url);
              });
              let url = urlSegments.map(urlSegment => {
                  return urlSegment.path;
              }).join('/');
              this.breadcrumbs.push({
                  name: node.data['breadcrumb'],
                  url: '/' + url
              })
          }
      }
      if (node.firstChild) {
          this.parseRoute(node.firstChild);
      }
    }
  ngOnInit() {
  }
  checkUrl(type) {
    if(this.router.url != '/salesglobal/marketing/prospects/dashboard/qualification' && this.router.url != '/salesglobal/marketing/prospects/dashboard/opportunities' && this.router.url != '/salesglobal/marketing/prospects/dashboard/meetings' && this.router.url != '/salesglobal/marketing/prospects/dashboard/leads' && this.router.url != '/salesglobal/marketing/prospects/dashboard/contacts' && this.router.url != '/salesglobal/marketing/prospects/dashboard/alerts') {
        if(type == 'class')
            return 'active-prosp-link';
        else    
            return true;
    }
  }
}
