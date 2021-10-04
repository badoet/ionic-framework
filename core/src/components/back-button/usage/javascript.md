```html
<!-- Default back button -->
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button></syg-back-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>

<!-- Back button with a default href -->
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button default-href="home"></syg-back-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>

<!-- Back button with custom text and icon -->
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button text="Volver" icon="close"></syg-back-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>

<!-- Back button with no text and custom icon -->
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button text="" icon="add"></syg-back-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>

<!-- Danger back button next to a menu button -->
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-menu-button></syg-menu-button>
      <syg-back-button color="danger"></syg-back-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>
```