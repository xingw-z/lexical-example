import { useEffect } from 'react';
import {$getRoot, $getSelection, $createParagraphNode, ElementNode, createCommand, $createTextNode } from 'lexical';
import LexicalComposer from "@lexical/react/LexicalComposer";
import RichTextPlugin from "@lexical/react/LexicalRichTextPlugin";
import ContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import AutoFocusPlugin from "@lexical/react/LexicalAutoFocusPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import LinkPlugin from "@lexical/react/LexicalLinkPlugin";
import ListPlugin from "@lexical/react/LexicalListPlugin";
import LexicalMarkdownShortcutPlugin from "@lexical/react/LexicalMarkdownShortcutPlugin";
import TablesPlugin from '@lexical/react/LexicalTablePlugin';
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import HorizontalRulePlugin from './plugins/HorizontalRulePlugin';
import ImagesPlugin from './plugins/ImagesPlugin';
import TableCellActionMenuPlugin from './plugins/TableActionMenuPlugin';
import TableCellResizer from './plugins/TableCellResizer';

import ExampleTheme from "./ExampleTheme";
import ExampleNodes from "./ExampleNodes";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [...ExampleNodes]
};

export const INSERT_HTML_COMMAND = createCommand();

function RichText() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const paragraphNode = $createParagraphNode();
    const textNode = $createTextNode('愿我会揸🚀 带你到天空去 在太空中两人住');
    paragraphNode.append(textNode);
    root.append(paragraphNode);
  }
}

export default function Editor() {
  function onChange(editorState, LexicalEditor) {
    editorState.read(() => {
      
      const root = $getRoot();
      const selection = $getSelection();
  
      console.log(root, selection, editorState, LexicalEditor);
    });
  }
  
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" ></ContentEditable>}
            placeholder={<Placeholder />}
            initialEditorState={RichText}
          />
          <LexicalOnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <LexicalMarkdownShortcutPlugin />
          <HorizontalRulePlugin />
          <ImagesPlugin />
          <TablesPlugin />
          <TableCellActionMenuPlugin />
          <TableCellResizer />
        </div>
      </div>
    </LexicalComposer>
  );
}
