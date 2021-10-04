# syg-text

The text component is a simple component that can be used to style the text color of any element. The `syg-text` element should wrap the element in order to change the text color of that element.


<!-- Auto Generated Below -->


## Usage

### Javascript

```html
<syg-text color="secondary">
  <h1>H1: The quick brown fox jumps over the lazy dog</h1>
</syg-text>

<syg-text color="primary">
  <h2>H2: The quick brown fox jumps over the lazy dog</h2>
</syg-text>

<syg-text color="light">
  <h3>H3: The quick brown fox jumps over the lazy dog</h3>
</syg-text>

<syg-text color="danger">
  <h4 >H4: The quick brown fox jumps over the lazy dog</h4>
</syg-text>

<syg-text color="dark">
  <h5>H5: The quick brown fox jumps over the lazy dog</h5>
</syg-text>

<p>
  I saw a werewolf with a Chinese menu in his hand.
  Walking through the <syg-text color="danger"><sub>streets</sub></syg-text> of Soho in the rain.
  He <syg-text color="primary"><i>was</i></syg-text> looking for a place called Lee Ho Fook's.
  Gonna get a <syg-text color="secondary"><a>big dish of beef chow mein.</a></syg-text>
  <syg-text color="danger"><ion-icon name="cut"></ion-icon></syg-text>
</p>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
