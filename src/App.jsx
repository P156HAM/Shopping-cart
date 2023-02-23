import { useState } from 'react'
import './App.css'
import Products from './components/Product/Product.jsx'
import Header from './components/Header/Header.jsx'
import { useSelector } from 'react-redux'

function App() {

  const cart = useSelector((state) => { return state.cart})

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

  
  const productsComponents = products.map ((book) => {
    return <Products cart={ cart } book={ book } key={ book.id }/>
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
