import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { Emotion } from './components/Emotion';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';

function App() {
  return (
    <div className="App">
    <InlineStyle />
    <CssModules />
    <StyledJsx />
    <StyledComponents />
    <Emotion />
    </div>
  );
}

export default App;
