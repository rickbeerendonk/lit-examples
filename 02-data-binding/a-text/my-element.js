/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    name: {}
  };

  constructor() {
    super();
    this.name = 'Lit';
  }

  render() {
    return html`<h1>Hello ${this.name}!</h1>`;
  }
}

customElements.define('my-element', MyElement);
