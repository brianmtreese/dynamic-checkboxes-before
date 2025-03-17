import { Component } from '@angular/core';
import { State, states } from './states';

@Component({
  selector: 'app-dynamic-checkbox-form',
  templateUrl: './dynamic-checkbox-form.component.html',
  styleUrls: ['./dynamic-checkbox-form.component.scss']
})
export class DynamicCheckboxComponent {
  protected states: State[] = states;
}