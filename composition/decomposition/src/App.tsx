import './App.css'
import { CardList, NewsContainer, Search } from './components'

function App() {

  return (
    <div className='app'>
      <NewsContainer />
      <Search />
      <CardList />
    </div>
  )
}

export default App