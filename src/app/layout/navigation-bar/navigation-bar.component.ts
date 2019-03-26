import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoadingBarService} from '../../services/loading-bar.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ca-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  routes: string[];
  selectedRoute: string;
  isLoading: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location,
              private loading: LoadingBarService) {
    this.routes = [];
  }

  ngOnInit() {
    this.loading.isOn.pipe(takeUntil(this.unsubscribe)).subscribe(value => this.isLoading = value);
    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
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

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
