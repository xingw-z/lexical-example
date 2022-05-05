import Editor from './Editor'
import {SettingsContext} from './context/SettingsContext';
import {SharedHistoryContext} from './context/SharedHistoryContext';
import './App.css'

function App() {
  return (
    <SettingsContext>
      <div className="App">
        <SharedHistoryContext>
          <Editor />
        </SharedHistoryContext>
      </div>
    </SettingsContext>
    
  )
}

export default App
