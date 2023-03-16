declare module '@svgedit/svgcanvas' {
  import { Element } from '@angular/compiler';

  class SvgCanvas {
    /**
     * @param {HTMLElement} container - The container HTML element that should hold the SVG root element
     * @param {module:SVGeditor.configObj.curConfig} config - An object that contains configuration data
     */
    constructor(container: HTMLElement, config: Record<string, any>);

    static $id: typeof document.getElementById;
    static $qq: typeof document.querySelector;
    static $qa: typeof document.querySelectorAll;
    static $click: (element: Element, handler: Function) => void;
    static encode64: (input: string) => string;
    static decode64: (input: string) => string;
    static mergeDeep: <T, K>(target: T, source: K) => T & K;
    static getClosest: (elem: Element, selector: string) => Element | null;
    static getParents: (elem: Node, selector: string) => Node[];

    static blankPageObjectURL: string;
    static Paint: any;
    static getTypeMap: () => {
      mm: number;
      ex: number;
      pc: number;
      pt: number;
      in: number;
      '%': 0;
      em: number;
      px: number;
      cm: number;
    };
    /**
     * Converts given values to numbers. Attributes must be supplied in case a percentage is given.
     */
    static convertToNum: (attr: string, val: string) => number;
    static isValidUnit: (attr: string, val: string, selectedElement: Element) => boolean;
    static convertUnit: (
      val: string | number,
      unit: 'em' | 'ex' | 'in' | 'cm' | 'mm' | 'pt' | 'pc' | 'px' | '%'
    ) => number;

    contentH: number;
    contentW: number;
    rStartX: number;
    rStartY: number;
    zoom: number;
    nextPos: Point;
    justSelected: Element;
    lastClickPoint: Point;
    lastGoodImgUrl: string;
    start: { number: 0; y: number };
    startTransform: string;
    startX: number;
    startY: number;
    started: boolean;
    idprefix: string;
    controllPoint1: Point;
    controllPoint2: Point;
    end: Point;
    svgContent: SVGElement;
    svgroot: SVGElement;
    svgdoc: Document;

    getJsonFromSvgElements(data: Element):
      | {
          element: string;
          // namespace: nsMap[data.namespaceURI],
          attr: Record<string, any>;
          children: Element[];
        }
      | string;
    updateCanvas(width: number, height: number): void;
    addSVGElementsFromJson: (data: string | Element) => any;
    // clearSvgContentElement = clearSvgContentElementInit;
    // textActions = textActionsMethod;
    // getStrokedBBox = getStrokedBBoxDefaultVisible;
    // getVisibleElements = getVisibleElements;
    // stringToHTML = stringToHTML;
    // insertChildAtIndex = insertChildAtIndex;
    // getClosest = getClosest;
    // getParents = getParents;
    // isLayer = draw.Layer.isLayer;
    // matrixMultiply = matrixMultiply;
    // hasMatrixTransform = hasMatrixTransform;
    // transformListToTransform = transformListToTransform;
    // convertToNum = convertToNum;
    // findDefs = findDefs;
    // getUrlFromAttr = getUrlFromAttr;
    // getHref = getHref;
    // setHref = setHref;
    // getBBox = utilsGetBBox;
    // getRotationAngle = getRotationAngle;
    // getElement = getElement;
    // getRefElem = getRefElem;
    // assignAttributes = assignAttributes;
    // cleanupElement = cleanupElement;
    // remapElement = remapElement;
    // recalculateDimensions = recalculateDimensions;
    // sanitizeSvg = sanitizeSvg;
    // pasteElements = pasteElementsMethod; // Remembers the current selected elements on the clipboard.
    // identifyLayers = draw.identifyLayers;
    // createLayer = draw.createLayer;
    // cloneLayer = draw.cloneLayer;
    // deleteCurrentLayer = draw.deleteCurrentLayer;
    // setCurrentLayer = draw.setCurrentLayer;
    // renameCurrentLayer = draw.renameCurrentLayer;
    // setCurrentLayerPosition = draw.setCurrentLayerPosition;
    // indexCurrentLayer = draw.indexCurrentLayer;
    // setLayerVisibility = draw.setLayerVisibility;
    // moveSelectedToLayer = draw.moveSelectedToLayer;
    // mergeLayer = draw.mergeLayer;
    // mergeAllLayers = draw.mergeAllLayers;
    // leaveContext = draw.leaveContext;
    // setContext = draw.setContext;
    // changeSelectedAttributeNoUndo = changeSelectedAttributeNoUndoMethod; // This function makes the changes to the elements. It does not add the change to the history stack.
    // changeSelectedAttribute = changeSelectedAttributeMethod; // Change the given/selected element and add the original value to the history stack.
    // setBlurNoUndo = setBlurNoUndo; // Sets the `stdDeviation` blur value on the selected element without being undoable.
    // setBlurOffsets = setBlurOffsets; // Sets the `x`, `y`, `width`, `height` values of the filter element in order to make the blur not be clipped. Removes them if not neeeded.
    // setBlur = setBlur; // Adds/updates the blur filter to the selected element.
    // smoothControlPoints = pathModule.smoothControlPoints;
    // getTypeMap = getTypeMap;
    history: {
      BatchCommand: any;
      ChangeElementCommand: any;
      Command: any;
      HistoryEventTypes: {
        BEFORE_APPLY: string;
        AFTER_APPLY: string;
        BEFORE_UNAPPLY: string;
        AFTER_UNAPPLY: string;
      };
      InsertElementCommand: any;
      MoveElementCommand: any;
      RemoveElementCommand: any;
      UndoManager: any;
    };
  }
  export default SvgCanvas;
}

declare interface Point {
  x: number;
  y: number;
}

declare module '@svgedit/svgcanvas/common/browser' {
  /**
   * @function module:browser.isWebkit
   * @returns {boolean}
   */
  export const isWebkit: () => boolean;
  /**
   * @function module:browser.isGecko
   * @returns {boolean}
   */
  export const isGecko: () => boolean;
  /**
   * @function module:browser.isChrome
   * @returns {boolean}
   */
  export const isChrome: () => boolean;

  /**
   * @function module:browser.isMac
   * @returns {boolean}
   */
  export const isMac: () => boolean;

  /**
   * @function module:browser.supportsGoodTextCharPos
   * @returns {boolean}
   */
  export const supportsGoodTextCharPos: () => boolean;
}
