import { useState } from 'react'
import './App.css'
import Products from './components/Product/Product.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  const products = [
    {
      "id" : "book-1",
      title : "A Sign of Four",
      author : "Sir Arthur Conan Doyle",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    }, 
    {
      "id" : "book-2",
      title : "A Study in Scarlet",
      author : "Sir Arthur Conan Doyle",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    },
    {
      "id" : "book-3",
      title : "Baskervilles Hound",
      author : "Sir Arthur Conan Doyle",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    },
    {
      "id" : "book-4",
      title : "The Adventures of Sherlock Holmes",
      author : "Sir Arthur Conan Doyle",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    }
  ]

  const [cart, setCart] = useState([])

  function updateCart(book) {
    if (!cart.map(book=>book.id).includes(book.id)) {
      setCart((currentCart) => { 
        return [...currentCart, book];
      })
    } else {
      setCart((currentCart) => {
        return [...currentCart];
      })
    }
  }
  
  const productsComponents = products.map ((book) => {
    return <Products book={ book } addToCart={ updateCart } key={ book.id }/>
  })

  return (
    <div className="App">
      <Header numberOfProducts={ cart.length } cart={ cart } />
      <main className='products'>
        { productsComponents }
      </main>
    </div>
  )
}


export default App
