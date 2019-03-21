import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules: any[] = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialDesignModule {
}
