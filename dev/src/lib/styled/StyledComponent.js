import { html, render } from 'lit';
const StyleMixin = (superclass) => {
    class StyleMixinClass extends superclass {
        constructor(...args) {
            super(...args);
            this.padding = '0';
            this.margin = '0';
            this.bgColor = 'transparent';
            this.as = 'div';
        }
        styledRender(content) {
            const styles = html `
        <style>
          .styled {
            display: block;
            padding: ${this.padding};
            margin: ${this.margin};
            background-color: ${this.bgColor};
          }
        </style>
      `;
            return html `
        ${styles}
        ${this.renderElement(this.as, content)}
      `;
        }
        renderElement(as, content) {
            const element = document.createElement(as);
            element.classList.add('styled');
            render(content, element);
            return element;
        }
    }
    StyleMixinClass.properties = {
        padding: { type: String },
        margin: { type: String },
        bgColor: { type: String },
        as: { type: String },
    };
    return StyleMixinClass;
};
export { StyleMixin };
//# sourceMappingURL=StyledComponent.js.map