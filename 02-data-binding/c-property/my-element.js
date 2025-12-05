/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    disabled: { type: Boolean }
  };

  constructor() {
    super();
    this.disabled = true;
  }

  render() {
    return html`<button .disabled="${this.disabled}">Click me</button>`;
  }
}

customElements.define('my-element', MyElement);
