import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </main>
  );
}

export default App;
