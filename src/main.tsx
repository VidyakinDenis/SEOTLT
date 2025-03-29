import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './core/App.tsx';

import { setupStore } from './store';
import { GlobalStyle } from './core/globals/global-style.ts';

const store = setupStore();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
