import { ModuleWithProviders, NgModule } from '@angular/core';
import { NGX_SVG_EDITOR_CONFIG, NgxSvgEditorConfig, SvgEditorComponent } from './component/svg-editor.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { ToolsPanelComponent } from './component/tools-panel/tools-panel.component';
import { ToolsLeftComponent } from './component/tools-left/tools-left.component';
import { ToolsBottomComponent } from './component/tools-bottom/tools-bottom.component';
import { ContextmenuComponent } from './component/contextmenu/contextmenu.component';
import { RulersComponent } from './component/rulers/rulers.component';
import { NamedTemplate } from './widget/named-template';

@NgModule({
  imports: [],
  exports: [SvgEditorComponent],
  declarations: [
    SvgEditorComponent,
    MenuBarComponent,
    ToolsPanelComponent,
    ToolsLeftComponent,
    ToolsBottomComponent,
    ContextmenuComponent,
    RulersComponent,
    NamedTemplate
  ]
})
export class SvgEditorModule {
  static forRoot(config: NgxSvgEditorConfig): ModuleWithProviders<SvgEditorModule> {
    return {
      ngModule: SvgEditorModule,
      providers: [{ provide: NGX_SVG_EDITOR_CONFIG, useValue: config }]
    };
  }
  static forChild(): ModuleWithProviders<SvgEditorModule> {
    return {
      ngModule: SvgEditorModule
    };
  }
}
