
import {TextNode} from 'lexical';

const mentionStyle = 'background-color: rgba(24, 119, 232, 0.2)';

export class MentionNode extends TextNode {
  __mention;

  static getType() {
    return 'mention';
  }

  static clone(node) {
    return new MentionNode(node.__mention, node.__text, node.__key);
  }

  constructor(mentionName, text, key) {
    super(text ?? mentionName, key);
    this.__mention = mentionName;
  }

  createDOM(config) {
    const dom = super.createDOM(config);
    dom.style.cssText = mentionStyle;
    dom.className = 'mention';
    return dom;
  }

  isTextEntity() {
    return true;
  }
}

export function $createMentionNode(mentionName) {
  const mentionNode = new MentionNode(mentionName);
  mentionNode.setMode('segmented').toggleDirectionless();
  return mentionNode;
}

export function $isMentionNode(node) {
  return node instanceof MentionNode;
}
