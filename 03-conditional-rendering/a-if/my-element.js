/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    show: { type: Boolean }
  };

  constructor() {
    super();
    this.show = true;
  }

  render() {
    return html`
      <button @click="${() => (this.show = !this.show)}">Toggle</button>
      ${this.show ? html`<h1>Hello Lit!</h1>` : ''}
    `;
  }
}

customElements.define('my-element', MyElement);
