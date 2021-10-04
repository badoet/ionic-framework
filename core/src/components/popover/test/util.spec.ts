import { isTriggerElement, getIndexOfItem, getNextItem, getPrevItem } from '../utils';

describe('isTriggerElement', () => {
  it('should return true is element is a trigger', () => {
    const el = document.createElement('div');
    el.setAttribute('data-syg-popover-trigger', 'true');

    expect(isTriggerElement(el)).toEqual(true);
  });

  it('should return false is element is not a trigger', () => {
    const el = document.createElement('div');

    expect(isTriggerElement(el)).toEqual(false);
  });
});

describe('getIndexOfItem', () => {
  it('should return the correct index in an array of syg-items', () => {
    const array = createArrayOfElements(['syg-item', 'syg-item', 'syg-item']);

    expect(getIndexOfItem(array, array[1])).toEqual(1);
  });

  it('should return -1 when syg-item not found', () => {
    const el = document.createElement('syg-item');
    const array = createArrayOfElements(['syg-item', 'syg-item']);

    expect(getIndexOfItem(array, el)).toEqual(-1);
  });

  it('should return -1 if a non-syg-item is passed in', () => {
    const array = createArrayOfElements(['syg-item', 'div', 'syg-item']);

    expect(getIndexOfItem(array, array[1])).toEqual(-1);
  });
});

describe('getNextItem', () => {
  it('should get the next item in an array of syg-items', () => {
    const array = createArrayOfElements(['syg-item', 'syg-item', 'syg-item']);
    expect(getNextItem(array, array[1])).toEqual(array[2]);
  });

  it('should return undefined if there is no next item', () => {
    const array = createArrayOfElements(['syg-item', 'syg-item', 'syg-item']);
    expect(getNextItem(array, array[2])).toEqual(undefined);
  });
});

describe('getPrevItem', () => {
  it('should get the previous item in an array of syg-items', () => {
    const array = createArrayOfElements(['syg-item', 'syg-item', 'syg-item']);
    expect(getPrevItem(array, array[1])).toEqual(array[0]);
  });

  it('should return undefined if there is no previous item', () => {
    const array = createArrayOfElements(['syg-item', 'syg-item', 'syg-item']);
    expect(getPrevItem(array, array[0])).toEqual(undefined);
  });
});

const createArrayOfElements = (tags: string[]) => {
  return tags.map(tag => document.createElement(tag));
}
