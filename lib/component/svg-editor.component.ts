import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';

import SvgCanvas from '@svgedit/svgcanvas';
import { fromEvent } from 'rxjs';
import { NamedTemplate } from '../widget/named-template';

export const NGX_SVG_EDITOR_CONFIG = new InjectionToken<NgxSvgEditorConfig>('NGX_SVG_EDITOR_CONFIG');

export interface NgxSvgEditorConfig {
  svgEditorPath?: string | (() => Promise<string>);
}

@Component({
  selector: 'ngx-svg-editor',
  templateUrl: './svg-editor.component.html',
  host: {
    '[class.svg-editor-container]': 'true'
  }
})
export class SvgEditorComponent implements OnInit, AfterContentInit {
  @Input() svg?: SVGElement | string;
  @ContentChildren(NamedTemplate) namedTemplate!: QueryList<NamedTemplate<{}>>;
  @ViewChild('svgCanvas', { static: true }) svgCanvas!: ElementRef<HTMLDivElement>;
  @ViewChild('workarea', { static: true }) workarea!: ElementRef<HTMLDivElement>;
  @Output() editorLoad = new EventEmitter<HTMLDivElement>();

  private canvas: any;

  constructor(@Inject(NGX_SVG_EDITOR_CONFIG) private config: NgxSvgEditorConfig) {}

  ngAfterContentInit(): void {
    this.namedTemplate.forEach(v => {});
  }

  ngOnInit(): void {
    const container = this.svgCanvas.nativeElement;
    const { clientWidth: width, clientHeight: height } = container;

    const config = {
      canvas_expansion: 1,
      dimensions: [800, 600],
      initFill: { color: 'fff', opacity: 1 },
      initStroke: { width: 1.5, color: '000', opacity: 1 },
      initOpacity: 1,
      imgPath: '/assets/editor-assets/images',
      extPath: '/assets/editor-assets/extensions',
      jGraduatePath: '/assets/editor-assets/images',
      extensions: [],
      initTool: 'select',
      wireframe: false,
      colorPickerCSS: false,
      gridSnapping: false,
      gridColor: '#000',
      baseUnit: 'px',
      snappingStep: 10,
      showRulers: true,
      show_outside_canvas: false,
      no_save_warning: true
    };
    const canvas = new SvgCanvas(container, config);
    console.log(canvas);
    canvas.updateCanvas(width, height);
    this.canvas = canvas;
    container.style.width = '800px';
    container.style.height = '600px';

    fromEvent(window, 'resize').subscribe(() => {
      const { clientWidth: width, clientHeight: height } = container;
      // canvas.updateCanvas(width, height);
    });
  }

  initSvg() {
    this.renderSvg(this.svg);

    // @ts-ignore
    if (window.MD && window.MD.Editor) {
      return;
    }
    if (!this.config.svgEditorPath) {
      this.config.svgEditorPath ||= './assets/svg-editor/';
    }

    if (typeof this.config.svgEditorPath === 'string') {
      this.loadScript(this.config.svgEditorPath);
    } else {
      this.config.svgEditorPath().then(path => this.loadScript(path));
    }
  }

  renderSvg(svg?: SVGElement | string) {
    if (!svg) {
      return;
    }

    if (typeof svg === 'string') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svg, 'image/svg+xml');
      this.workarea.nativeElement.appendChild(doc.documentElement);
    } else {
      this.workarea.nativeElement.appendChild(svg);
    }
  }

  loadScript(url: string, callback?: (this: SvgEditorComponent, svgCanvas: HTMLDivElement) => void) {
    // @ts-ignore
    window.svgEditorPath = url;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url + '/svg-editor.js';

    if (callback) {
      script.onload = () => callback.call(this, this.svgCanvas.nativeElement);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
