/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    items: { type: Array }
  };

  constructor() {
    super();
    this.items = ['Alexandra', 'Benjamin', 'Charlotte'];
  }

  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define('my-element', MyElement);
