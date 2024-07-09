import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { YuiKit } from '../src/yui-kit.js';
import '../src/yui-kit.js';

describe('YuiKit', () => {
  let element: YuiKit;
  beforeEach(async () => {
    element = await fixture(html`<yui-kit></yui-kit>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
