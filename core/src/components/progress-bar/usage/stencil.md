```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'progress-bar-example',
  styleUrl: 'progress-bar-example.css'
})
export class ProgressBarExample {
  render() {
    return [
      // Default Progressbar
      <syg-progress-bar></syg-progress-bar>,

      // Default Progressbar with 50 percent
      <syg-progress-bar value={0.5}></syg-progress-bar>,

      // Colorize Progressbar
      <syg-progress-bar color="primary" value={0.5}></syg-progress-bar>,
      <syg-progress-bar color="secondary" value={0.5}></syg-progress-bar>,

      // Other types
      <syg-progress-bar value={0.25} buffer={0.5}></syg-progress-bar>,
      <syg-progress-bar type="indeterminate"></syg-progress-bar>,
      <syg-progress-bar type="indeterminate" reversed={true}></syg-progress-bar>
    ];
  }
}
```
