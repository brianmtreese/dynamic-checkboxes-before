import { Component } from '@angular/core';
import { DynamicCheckboxComponent } from './dynamic-checkbox-form/dynamic-checkbox-form.component';

@Component({
  selector: 'app-root',
  template: `<app-dynamic-checkbox-form></app-dynamic-checkbox-form>`,
  imports: [DynamicCheckboxComponent],
})
export class AppComponent {
}

