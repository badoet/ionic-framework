### Single Selection

```html
<syg-list>
  <syg-list-header>
    <syg-label>
      Single Selection
    </syg-label>
  </syg-list-header>

  <syg-item>
    <syg-label>Gender</syg-label>
    <syg-select placeholder="Select One">
      <syg-select-option value="f">Female</syg-select-option>
      <syg-select-option value="m">Male</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Hair Color</syg-label>
    <syg-select value="brown" ok-text="Okay" cancel-text="Dismiss">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

</syg-list>
```

### Multiple Selection

```html
<syg-list>
  <syg-list-header>
    <syg-label>
      Multiple Selection
    </syg-label>
  </syg-list-header>

  <syg-item>
    <syg-label>Toppings</syg-label>
    <syg-select multiple="true" cancel-text="Nah" ok-text="Okay!">
      <syg-select-option value="bacon">Bacon</syg-select-option>
      <syg-select-option value="olives">Black Olives</syg-select-option>
      <syg-select-option value="xcheese">Extra Cheese</syg-select-option>
      <syg-select-option value="peppers">Green Peppers</syg-select-option>
      <syg-select-option value="mushrooms">Mushrooms</syg-select-option>
      <syg-select-option value="onions">Onions</syg-select-option>
      <syg-select-option value="pepperoni">Pepperoni</syg-select-option>
      <syg-select-option value="pineapple">Pineapple</syg-select-option>
      <syg-select-option value="sausage">Sausage</syg-select-option>
      <syg-select-option value="Spinach">Spinach</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Pets</syg-label>
    <syg-select id="multiple" multiple="true">
      <syg-select-option value="bird">Bird</syg-select-option>
      <syg-select-option value="cat">Cat</syg-select-option>
      <syg-select-option value="dog">Dog</syg-select-option>
      <syg-select-option value="honeybadger">Honey Badger</syg-select-option>
    </syg-select>
  </syg-item>
</syg-list>
```

```javascript
const select = document.querySelector('multiple');
select.value = ['bird', 'dog'];
```

### Objects as Values

```html
<syg-list>
  <syg-list-header>
    <syg-label>
      Objects as Values (compareWith)
    </syg-label>
  </syg-list-header>

  <syg-item>
    <syg-label>Users</syg-label>
    <syg-select id="objectSelectCompareWith"></syg-select>
  </syg-item>
</syg-list>
```

```javascript
  let objectOptions = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  let compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  let objectSelectElement = document.getElementById('objectSelectCompareWith');
  objectSelectElement.compareWith = compareWithFn;

  objectOptions.forEach((option, i) => {
    let selectOption = document.createElement('syg-select-option');
    selectOption.value = option;
    selectOption.textContent = option.first + ' ' + option.last;

    objectSelectElement.appendChild(selectOption)
  });

  objectSelectElement.value = objectOptions[0];
}
```

### Interface Options

```html
<syg-list>
  <syg-list-header>
    <syg-label>
      Interface Options
    </syg-label>
  </syg-list-header>

  <syg-item>
    <syg-label>Alert</syg-label>
    <syg-select id="customAlertSelect" interface="alert" multiple="true" placeholder="Select One">
      <syg-select-option value="bacon">Bacon</syg-select-option>
      <syg-select-option value="olives">Black Olives</syg-select-option>
      <syg-select-option value="xcheese">Extra Cheese</syg-select-option>
      <syg-select-option value="peppers">Green Peppers</syg-select-option>
      <syg-select-option value="mushrooms">Mushrooms</syg-select-option>
      <syg-select-option value="onions">Onions</syg-select-option>
      <syg-select-option value="pepperoni">Pepperoni</syg-select-option>
      <syg-select-option value="pineapple">Pineapple</syg-select-option>
      <syg-select-option value="sausage">Sausage</syg-select-option>
      <syg-select-option value="Spinach">Spinach</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Popover</syg-label>
    <syg-select id="customPopoverSelect" interface="popover" placeholder="Select One">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Action Sheet</syg-label>
    <syg-select id="customActionSheetSelect" interface="action-sheet" placeholder="Select One">
      <syg-select-option value="red">Red</syg-select-option>
      <syg-select-option value="purple">Purple</syg-select-option>
      <syg-select-option value="yellow">Yellow</syg-select-option>
      <syg-select-option value="orange">Orange</syg-select-option>
      <syg-select-option value="green">Green</syg-select-option>
    </syg-select>
  </syg-item>

</syg-list>
```

```javascript
var customAlertSelect = document.getElementById('customAlertSelect');
var customAlertOptions = {
  header: 'Pizza Toppings',
  subHeader: 'Select your toppings',
  message: '$1.00 per topping',
  translucent: true
};
customAlertSelect.interfaceOptions = customAlertOptions;

var customPopoverSelect = document.getElementById('customPopoverSelect');
var customPopoverOptions = {
  header: 'Hair Color',
  subHeader: 'Select your hair color',
  message: 'Only select your dominant hair color'
};
customPopoverSelect.interfaceOptions = customPopoverOptions;

var customActionSheetSelect = document.getElementById('customActionSheetSelect');
var customActionSheetOptions = {
  header: 'Colors',
  subHeader: 'Select your favorite color'
};
customActionSheetSelect.interfaceOptions = customActionSheetOptions;
```