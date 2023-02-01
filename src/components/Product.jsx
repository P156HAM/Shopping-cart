function Book(props) {
    return (
        <div className="books-container">
            <h1> { props.title } </h1>
            <h2> Av { props.author } </h2>
            <p> { props.text } </p>
            <button> Add to cart </button>
        </div>
    )
}

export default Book