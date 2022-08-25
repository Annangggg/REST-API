
/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

let books: { id: string, title: string, type: string }[] = [
    {"id": "0",  "title": "Heroes", "type": "Novel" },
    { "id": "1", "title": "Bird", "type": "Newpaper" },
];


// getting all books
const getBooks = ((req: Request, res: Response) => {
    res.status(200).json({books});

});

// adding a book
const addBook = async (req: Request, res: Response) => {
    // get the data from req.body
    let book = req.body;
    //let id = req.params.body;
    books.push(book);
    res.status(201).json(book);
    
}

const deleteBook = async (req: Request, res: Response) => {
    // get the post id from req.params and delete
    books = books.filter(({ id }) => id !== req.params.id);
    // return list of books 
    return res.status(204).json(books);
};
 
// updating a post
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    // get the book id from the req.params
    const getBook = books.find(i => i.id === req.params.id);

    if(!getBook) return res.status(404).json({})
    else {
        console.log(getBook);
        getBook.title = req.body.title;
        getBook.type = req.body.type;
        getBook.id = req.params.id;
        res.json(getBook);
    }
}
 
export default { getBooks, addBook, deleteBook, updateBook };