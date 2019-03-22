import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'ca-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  routes: string[];
  selectedRoute: string;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.routes = [];
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  private onRouteChange() {
    this.routes = [];
    const currentRoute = this.route.snapshot.firstChild;
    this.routes.push(currentRoute.data.pathName);
    let parentRoute = this.router.config.find(r => r.path === currentRoute.data.parentPathName);
    while (parentRoute) {
      this.routes.push(parentRoute.data.pathName);
      parentRoute = this.router.config.find(r => r.path === parentRoute.data.parentPathName);
    }
    this.selectedRoute = this.routes[0];
    this.routes.reverse();
  }
}
