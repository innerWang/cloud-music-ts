import 'assets/iconfont/symbol';
import { GlobalStyle } from './style';
import { IconStyle } from 'assets/iconfont';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from 'routes';

import { StoresProvider, stores } from 'store';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <IconStyle />
      <StoresProvider value={stores}>{renderRoutes(routes)}</StoresProvider>
    </HashRouter>
  );
}

export default App;
