import { html, TemplateResult } from 'lit';
import '../src/yui-kit.js';

export default {
  title: 'YuiKit',
  component: 'yui-kit',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <yui-kit style="--yui-kit-background-color: ${backgroundColor}" .header=${header}></yui-kit>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
