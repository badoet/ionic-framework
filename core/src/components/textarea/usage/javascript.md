```html
<!-- Default textarea -->
<syg-textarea></syg-textarea>

<!-- Textarea in an item with a placeholder -->
<syg-item>
  <syg-textarea placeholder="Enter more information here..."></syg-textarea>
</syg-item>

<!-- Textarea in an item with a floating label -->
<syg-item>
  <syg-label position="floating">Description</syg-label>
  <syg-textarea></syg-textarea>
</syg-item>

<!-- Disabled and readonly textarea in an item with a stacked label -->
<syg-item>
  <syg-label position="stacked">Summary</syg-label>
  <syg-textarea
    disabled
    readonly
    value="Ionic enables developers to build performant, high-quality mobile apps.">
  </syg-textarea>
</syg-item>

<!-- Textarea that clears the value on edit -->
<syg-item>
  <syg-label>Comment</syg-label>
  <syg-textarea clear-on-edit="true"></syg-textarea>
</syg-item>

<!-- Textarea with custom number of rows and cols -->
<syg-item>
  <syg-label>Notes</syg-label>
  <syg-textarea rows="6" cols="20" placeholder="Enter any notes here..."></syg-textarea>
</syg-item>
```
