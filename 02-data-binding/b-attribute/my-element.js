/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    url: {}
  };

  constructor() {
    super();
    this.url = 'https://lit.dev';
  }

  render() {
    return html`<a href="${this.url}">Visit Lit</a>`;
  }
}

customElements.define('my-element', MyElement);
