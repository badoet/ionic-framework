import { SygSafeString, sanitizeDOMString } from "..";

describe('sanitizeDOMString', () => {
  it('disable sanitizer', () => {
    enableSanitizer(false);
    expect(sanitizeDOMString('<img src="x" onerror="alert(document.cookie);">'))
      .toEqual('<img src="x" onerror="alert(document.cookie);">');
  })

  it('bypass sanitizer', () => {
    expect(sanitizeDOMString(new SygSafeString('<img src="x" onerror="alert(document.cookie);">')))
      .toEqual('<img src="x" onerror="alert(document.cookie);">');
  });

  it('filter onerror', () => {
    expect(sanitizeDOMString('<img src="x" onerror="alert(document.cookie);">'))
      .toEqual('<img src="x">');
  });

  it('filter onclick', () => {
    expect(sanitizeDOMString('<button id="myButton" name="myButton" onclick="alert(document.cookie);">harmless button</button>'))
      .toEqual('<button id="myButton" name="myButton">harmless button</button>');
  });

  it('filter <a> href JS', () => {
    expect(sanitizeDOMString('<a href="javascript:alert(document.cookie)">harmless link</a>'))
      .toEqual('<a>harmless link</a>');
  });

  it('filter <a> href JS + class attribute', () => {
    expect(sanitizeDOMString('<a class="link" href="Javascript&#58;alert(document.cookie)">harmless link</a>'))
      .toEqual('<a class="link">harmless link</a>');
  });

  it('filter <iframe>', () => {
    expect(sanitizeDOMString('<iframe src="javascript:alert(document.cookie)"></iframe>'))
      .toEqual('');
  });

  it('filter href + javascript ', () => {
    expect(sanitizeDOMString('<div><button><a href="javascript:alert(document.cookie)">click me</a></button></div>'))
      .toEqual('<div><button><a>click me</a></button></div>');
  });

  it('filter <object>', () => {
    expect(sanitizeDOMString('<object><img src="x" onerror="alert(document.cookie);"></object>'))
      .toEqual('');
  });

  it('sanitizeDOMString', () => {
    expect(sanitizeDOMString('<syg-item><syg-label>Hello!</syg-label><syg-button onclick="alert(document.cookie);">Click me</syg-button>'))
      .toEqual('<syg-item><syg-label>Hello!</syg-label><syg-button>Click me</syg-button></syg-item>');
  });
});

const enableSanitizer = (enable: boolean = true) => {
  window.Sygic = {};
  window.Sygic.config = {};
  window.Sygic.config.sanitizerEnabled = enable;
}
