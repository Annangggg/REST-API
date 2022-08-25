import { Request, Response, NextFunction } from 'express';

let books: { title: string, author: string, type: string, id: number, }[] = [
    { "title": "Heroes", "author": "Robert Cormier", "type": "Novel","id": 1 },
    { "title": "Bird", "author": "Anna", "type": "Newspaper", "id": 2 },
];

// getting all books
const getBooks = ((req: Request, res: Response) => {

    if(books === undefined || books.length == 0)
    {
        res.status(404).json("No books to show");
    }
    else {
        res.status(200).json({books});
    }
});

// adding a book
const addBook = async (req: Request, res: Response, next:NextFunction) => {
    // get the data from req.body
    let book = req.body;
    let id = 1;

    if(books.find(b => b.title === book.title)) {

        res.status(400).json("Book already exist!");

    }
    else {
        books.forEach((item) => {
       
            if (item.id >= id) 
            {
                id = item.id +1;
            }
        });   
        book.id = id;
        books.push(book);
        res.status(201).json(book); 
        return;
    }
}

// Deleting book with an id
const deleteBook = async (req: Request, res: Response) => {
    // get the post id from req.params and delete
    if(books.filter(({ id }) => id !== parseInt(req.params.id)).length === books.length)
    {
        res.status(404).json("There is no such book!");
    }
    else {
        books = books.filter(({ id }) => id !== parseInt(req.params.id));

        if(books === undefined || books.length === 0)
        {
            res.status(404).json("There is no such book!");
        }
        else {
            // return list of books 
            return res.status(200).json(books);
        }
    }
};
 
// Deleting all books
const deleteAllBooks = async (req: Request, res: Response) => {

    return res.status(200).json(books = []);
};

// updating a book
const updateBook = async (req: Request, res: Response) => {

    if(books.filter(({ id }) => id !== parseInt(req.params.id)).length === books.length)
    {
        res.status(404).json("There is no such book!");
    }
    else 
    {
        const getBook = books.find(i => i.id === parseInt(req.params.id));
        if(!getBook) return res.status(404).json({})

        else {
            getBook.title = req.body.title;
            getBook.type = req.body.type;
            getBook.id = parseInt(req.params.id);
            getBook.author = req.body.author;
            res.json(getBook);
        }
    }
    
}
 
export default { getBooks, addBook, deleteBook, updateBook, deleteAllBooks };