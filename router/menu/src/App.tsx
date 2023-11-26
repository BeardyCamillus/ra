import { Menu } from './components';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
