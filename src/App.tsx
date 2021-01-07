import 'assets/iconfont/symbol';
import { GlobalStyle } from './style';
import { IconStyle, SvgIcon } from 'assets/iconfont';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconStyle />
      <SvgIcon type="search" />
    </div>
  );
}

export default App;
