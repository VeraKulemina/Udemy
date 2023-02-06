const books = [
    {
        name: 'book1',
        price: 1
    },
    {
        name: 'book2',
        price: 2
    },
    {
        name: 'book3',
        price: 3
    },
    {
        name: 'book4',
        price: 4
    }
]

books.forEach(function (book) {
    console.log(`${book.name} ${book.price}`)
});