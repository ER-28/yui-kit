import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { StyleMixin } from '../../styled/StyledComponent.js';
let Box = class Box extends StyleMixin(LitElement) {
    render() {
        return this.styledRender(html `
      <slot></slot>
    `);
    }
};
Box = __decorate([
    customElement('yui-box')
], Box);
export { Box };
export default Box;
//# sourceMappingURL=index.js.map