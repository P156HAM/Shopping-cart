import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/Product.css'
import Book from './components/Product'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className='Books'>
        <Book title="A Sign of Four" author="Sir Arthur Conan Doyle" text="Lorem Ipsum dolor sit amet consectetur" />
        <Book title="A Study in Scarlet" author="Sir Arthur Conan Doyle" text="Lorem Ipsum dolor sit amet consectetur" />
        <Book title="Baskervilles Hound" author="Sir Arthur Conan Doyle" text="Lorem Ipsum dolor sit amet consectetur" />
        <Book title="The Adventures of Sherlock Holmes" author="Sir Arthur Conan Doyle" text="Lorem Ipsum dolor sit amet consectetur" />
      </div>
    </div>
  )
}

export default App
