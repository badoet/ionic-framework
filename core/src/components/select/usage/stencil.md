### Single Selection

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css'
})
export class SelectExample {
  render() {
    return [
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
          <syg-select value="brown" okText="Okay" cancelText="Dismiss">
            <syg-select-option value="brown">Brown</syg-select-option>
            <syg-select-option value="blonde">Blonde</syg-select-option>
            <syg-select-option value="black">Black</syg-select-option>
            <syg-select-option value="red">Red</syg-select-option>
          </syg-select>
        </syg-item>

      </syg-list>
    ];
  }
}
```

### Multiple Selection

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css'
})
export class SelectExample {
  render() {
    return [
      <syg-list>
        <syg-list-header>
          <syg-label>
            Multiple Selection
          </syg-label>
        </syg-list-header>

        <syg-item>
          <syg-label>Toppings</syg-label>
          <syg-select multiple={true} cancelText="Nah" okText="Okay!">
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
          <syg-select multiple={true} value={['bird', 'dog']}>
            <syg-select-option value="bird">Bird</syg-select-option>
            <syg-select-option value="cat">Cat</syg-select-option>
            <syg-select-option value="dog">Dog</syg-select-option>
            <syg-select-option value="honeybadger">Honey Badger</syg-select-option>
          </syg-select>
        </syg-item>
      </syg-list>
    ];
  }
}
```

### Objects as Values

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css'
})
export class SelectExample {
  private users: any[] = [
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

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  render() {
    return [
      <syg-list>
        <syg-list-header>
          <syg-label>
            Objects as Values (compareWith)
          </syg-label>
        </syg-list-header>

        <syg-item>
          <syg-label>Users</syg-label>
          <syg-select compareWith={this.compareWith}>
            {this.users.map(user =>
            <syg-select-option value={user}>
              {user.first + ' ' + user.last}
            </syg-select-option>
            )}
          </syg-select>
        </syg-item>
      </syg-list>
    ];
  }
}
```

### Interface Options

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css'
})
export class SelectExample {
  private customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  private customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  private customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  render() {
    return [
      <syg-list>
        <syg-list-header>
          <syg-label>
            Interface Options
          </syg-label>
        </syg-list-header>

        <syg-item>
          <syg-label>Alert</syg-label>
          <syg-select interfaceOptions={this.customAlertOptions} interface="alert" multiple={true} placeholder="Select One">
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
          <syg-select interfaceOptions={this.customPopoverOptions} interface="popover" placeholder="Select One">
            <syg-select-option value="brown">Brown</syg-select-option>
            <syg-select-option value="blonde">Blonde</syg-select-option>
            <syg-select-option value="black">Black</syg-select-option>
            <syg-select-option value="red">Red</syg-select-option>
          </syg-select>
        </syg-item>

        <syg-item>
          <syg-label>Action Sheet</syg-label>
          <syg-select interfaceOptions={this.customActionSheetOptions} interface="action-sheet" placeholder="Select One">
            <syg-select-option value="red">Red</syg-select-option>
            <syg-select-option value="purple">Purple</syg-select-option>
            <syg-select-option value="yellow">Yellow</syg-select-option>
            <syg-select-option value="orange">Orange</syg-select-option>
            <syg-select-option value="green">Green</syg-select-option>
          </syg-select>
        </syg-item>
      </syg-list>
    ];
  }
}
```