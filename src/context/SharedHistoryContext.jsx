
import {createEmptyHistoryState} from '@lexical/react/LexicalHistoryPlugin';
import * as React from 'react';
import {createContext, useContext, useMemo} from 'react';


const Context = createContext({
  historyState: {current: null, redoStack: [], undoStack: []},
});

export const SharedHistoryContext = ({
  children,
}) => {
  const historyContext = useMemo(
    () => ({historyState: createEmptyHistoryState()}),
    [],
  );
  return <Context.Provider value={historyContext}>{children}</Context.Provider>;
};

export const useSharedHistoryContext = () => {
  return useContext(Context);
};
