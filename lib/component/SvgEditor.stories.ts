import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { storyFactory } from '@stories';
import { SvgEditorComponent } from './svg-editor.component';
import { SvgEditorModule } from 'lib/svg-editor.module';

export default {
  title: '组件/svg-editor 设计器',
  component: SvgEditorComponent,
  decorators: [
    moduleMetadata({
      imports: [SvgEditorModule.forRoot({})]
    })
  ],
  argTypes: {},
  parameters: {
    docs: {
      // 传给
      moduleName: '',
      importName: ''
    }
  }
} as Meta;

const Template: (props?: Partial<SvgEditorComponent>) => Story<SvgEditorComponent> = storyFactory;

export const Default = Template({
  svg: `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <rect fill="#fff" x="140" y="119.9375" width="226" height="141" id="svg_3" stroke="#000"/>
  <rect id="svg_1" height="128" width="170" y="198.5" x="304.5" stroke="#000" fill="#fff"/>
 </g>

</svg>`
});
