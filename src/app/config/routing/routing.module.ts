import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from '../../contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from '../../contact/contact-details/contact-details.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
