import { SimRange, SugarElement } from '@ephox/sugar';

import { Editor } from '../alien/EditorTypes';

export interface TinyDom {
  readonly fromRange: (rng: Range) => SimRange;
  readonly body: (editor: Editor) => SugarElement<HTMLElement>;
  readonly document: (editor: Editor) => SugarElement<HTMLDocument>;
  readonly documentElement: (editor: Editor) => SugarElement<HTMLElement>;
  readonly container: (editor: Editor) => SugarElement<HTMLElement>;
  readonly contentAreaContainer: (editor: Editor) => SugarElement<HTMLElement>;
  readonly targetElement: (editor: Editor) => SugarElement<HTMLElement>;
}

const fromRange = (rng: Range): SimRange =>
  SimRange.create(
    SugarElement.fromDom(rng.startContainer),
    rng.startOffset,
    SugarElement.fromDom(rng.endContainer), rng.endOffset
  );

const body = (editor: Editor): SugarElement<HTMLElement> =>
  SugarElement.fromDom(editor.getBody());

const document = (editor: Editor): SugarElement<HTMLDocument> =>
  SugarElement.fromDom(editor.getDoc());

const documentElement = (editor: Editor): SugarElement<HTMLElement> =>
  SugarElement.fromDom(editor.getDoc().documentElement);

const container = (editor: Editor): SugarElement<HTMLElement> =>
  SugarElement.fromDom(editor.getContainer());

const contentAreaContainer = (editor: Editor): SugarElement<HTMLElement> =>
  SugarElement.fromDom(editor.getContentAreaContainer());

const targetElement = (editor: Editor): SugarElement<HTMLElement> =>
  SugarElement.fromDom(editor.getElement());

export const TinyDom: TinyDom = {
  fromRange,

  body,
  container,
  contentAreaContainer,
  document,
  documentElement,
  targetElement
};
