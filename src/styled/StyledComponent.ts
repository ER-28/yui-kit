import { LitElement, html, TemplateResult, render } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

interface StyleMixinInterface {
  padding: string;
  margin: string;
  bgColor: string;
  as: string;
}

const StyleMixin = <T extends Constructor<LitElement>>(superclass: T) => {
  class StyleMixinClass extends superclass implements StyleMixinInterface {
    static properties = {
      padding: { type: String },
      margin: { type: String },
      bgColor: { type: String },
      as: { type: String },
    };


    padding = '0';
    margin = '0';
    bgColor = 'transparent';
    as = 'div';

    constructor(...args: any[]) {
      super(...args);
    }

    styledRender(content: TemplateResult): TemplateResult {
      const styles = html`
        <style>
          .styled {
            display: block;
            padding: ${this.padding};
            margin: ${this.margin};
            background-color: ${this.bgColor};
          }
        </style>
      `;

      return html`
        ${styles}
        ${this.renderElement(this.as, content)}
      `;
    }

    renderElement(as: string, content: TemplateResult) {
      const element = document.createElement(as);
      element.classList.add('styled');
      render(content, element);
      return element;
    }
  }

  return StyleMixinClass;
};

export { StyleMixin };
