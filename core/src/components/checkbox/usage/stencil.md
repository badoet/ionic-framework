```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'checkbox-example',
  styleUrl: 'checkbox-example.css'
})
export class CheckboxExample {
  private form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  render() {
    return [
      // Default Checkbox
      <syg-checkbox></syg-checkbox>,

      // Disabled Checkbox
      <syg-checkbox disabled={true}></syg-checkbox>,

      // Checked Checkbox
      <syg-checkbox checked={true}></syg-checkbox>,

      // Checkbox Colors
      <syg-checkbox color="primary"></syg-checkbox>,
      <syg-checkbox color="secondary"></syg-checkbox>,
      <syg-checkbox color="danger"></syg-checkbox>,
      <syg-checkbox color="light"></syg-checkbox>,
      <syg-checkbox color="dark"></syg-checkbox>,

      // Checkboxes in a List
      <syg-list>
        {this.form.map(entry =>
          <syg-item>
            <syg-label>{entry.val}</syg-label>
            <syg-checkbox slot="end" checked={entry.isChecked}></syg-checkbox>
          </syg-item>
        )}
      </syg-list>
    ];
  }
}
```
