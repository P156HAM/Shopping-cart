const addProduct = (book) => {
    return {
        type: 'ADD-PRODUCT',
        payload: book
    }
}

export { addProduct };