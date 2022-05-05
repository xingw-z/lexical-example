import {TextNode} from 'lexical';

export class KeywordNode extends TextNode {
  static getType() {
    return 'keyword';
  }

  static clone(node) {
    return new KeywordNode(node.__text, node.__key);
  }

  createDOM(config) {
    const dom = super.createDOM(config);
    dom.style.cursor = 'default';
    dom.className = 'keyword';
    return dom;
  }

  canInsertTextBefore() {
    return false;
  }

  canInsertTextAfter() {
    return false;
  }

  isTextEntity() {
    return true;
  }
}

export function $createKeywordNode(keyword) {
  return new KeywordNode(keyword);
}

export function $isKeywordNode(node) {
  return node instanceof KeywordNode;
}
