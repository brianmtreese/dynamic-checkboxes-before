import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { State, states } from './states';

@Component({
  selector: 'app-dynamic-checkbox-form',
  templateUrl: './dynamic-checkbox-form.component.html',
  styleUrls: ['./dynamic-checkbox-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class DynamicCheckboxComponent {
  protected states: State[] = states;
  protected selectAll = new FormControl(false, { nonNullable: true });
  protected form = new FormGroup(
    Object.fromEntries(
      this.states.map(
        option => [option.value, new FormControl(false, { nonNullable: true })]
      )
    )
  );

  constructor() {
    this.selectAll.valueChanges.subscribe(checked => this.toggleAll(checked));
  }

  get selectedValues() {
    return Object.keys(this.form.value).filter(key => this.form.value[key]);
  }

  private toggleAll(checked: boolean) {
    const controlsArray = Object.keys(this.form.controls);
    controlsArray.forEach(key => {
      this.form.get(key)?.setValue(checked, { emitEvent: false });
    });
  }
}