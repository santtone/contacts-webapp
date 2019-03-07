import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules: any[] = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialDesignModule {
}
