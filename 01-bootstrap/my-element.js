/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      border: 2px solid #d676ff;
      border-radius: 10px;
      padding: 10px;
      background-color: #f5e6ff;
    }

    h2 {
      color: #d676ff;
      margin-top: 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2>Hello from Lit!</h2>
        <p>This is a Lit example.</p>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
