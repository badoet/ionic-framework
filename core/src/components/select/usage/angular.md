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
    <syg-select value="brown" okText="Okay" cancelText="Dismiss">
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
    <syg-select multiple="true" cancelText="Nah" okText="Okay!">
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
    <syg-select multiple="true" [value]="['bird', 'dog']">
      <syg-select-option value="bird">Bird</syg-select-option>
      <syg-select-option value="cat">Cat</syg-select-option>
      <syg-select-option value="dog">Dog</syg-select-option>
      <syg-select-option value="honeybadger">Honey Badger</syg-select-option>
    </syg-select>
  </syg-item>
</syg-list>
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
    <syg-select [compareWith]="compareWith">
      <syg-select-option *ngFor="let user of users" [value]="user">{{user.first + ' ' + user.last}}</syg-select-option>
    </syg-select>
  </syg-item>
</syg-list>
```

```typescript
import { Component } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  users: User[] = [
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

  compareWith(o1: User, o2: User) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
```

### Objects as Values with Multiple Selection

```html
<syg-list>
  <syg-list-header>
    <syg-label>
      Objects as Values (compareWith)
    </syg-label>
  </syg-list-header>

  <syg-item>
    <syg-label>Users</syg-label>
    <syg-select [compareWith]="compareWith" multiple="true">
      <syg-select-option *ngFor="let user of users" [value]="user">{{user.first + ' ' + user.last}}</syg-select-option>
    </syg-select>
  </syg-item>
</syg-list>
```

```typescript
import { Component } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  users: User[] = [
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

  compareWith(o1: User, o2: User | User[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: User) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }
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
    <syg-select [interfaceOptions]="customAlertOptions" interface="alert" multiple="true" placeholder="Select One">
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
    <syg-select [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="Select One">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Action Sheet</syg-label>
    <syg-select [interfaceOptions]="customActionSheetOptions" interface="action-sheet" placeholder="Select One">
      <syg-select-option value="red">Red</syg-select-option>
      <syg-select-option value="purple">Purple</syg-select-option>
      <syg-select-option value="yellow">Yellow</syg-select-option>
      <syg-select-option value="orange">Orange</syg-select-option>
      <syg-select-option value="green">Green</syg-select-option>
    </syg-select>
  </syg-item>

</syg-list>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
}
```
