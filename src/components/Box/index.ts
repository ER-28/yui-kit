import { customElement } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { StyleMixin } from '../../styled/StyledComponent.js';

@customElement('yui-box')
export class Box extends StyleMixin(LitElement) {
  render() {
    return this.styledRender(html`
      <slot></slot>
    `);
  }
}

export default Box;
