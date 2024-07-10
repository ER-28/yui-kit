import { LitElement, html, css, TemplateResult } from 'lit';
import { literal, unsafeStatic } from 'lit/static-html.js';

type Constructor<T = {}> = new (...args: any[]) => T;

interface StyleMixinInterface {
  padding: string;
  margin: string;
  bgcolor: string;
  as: string;
}

const StyleMixin = <T extends Constructor<LitElement>>(superclass: T) => {
  class StyleMixinClass extends superclass implements StyleMixinInterface {
    static properties = {
      padding: { type: String },
      margin: { type: String },
      bgcolor: { type: String },
      as: { type: String },
    };

    padding = '0';
    margin = '0';
    bgcolor = 'transparent';
    as = 'div';

    constructor(...args: any[]) {
      super(...args);
    }

    styledRender(content: TemplateResult): TemplateResult {
      const styles = html`
        <style>
          .custom {
            display: block;
            padding: ${this.padding};
            margin: ${this.margin};
            background-color: ${this.bgcolor};
          }
        </style>
      `;

      return html`
        ${styles}
        ${this.renderElement(this.as, content)}
      `;
    }

    renderElement(as: string, content: TemplateResult): TemplateResult {
      switch (as) {
        case 'p':
          return html`<p class="custom">${content}</p>`;
        case 'span':
          return html`<span class="custom">${content}</span>`;
        default:
          return html`<div class="custom">${content}</div>`;
      }
    }
  }

  return StyleMixinClass;
};

export { StyleMixin };
