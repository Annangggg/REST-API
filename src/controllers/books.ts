
/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

let books: { title: string, type: string, id: number, }[] = [
    { "title": "Heroes", "type": "Novel","id": 1 },
    { "title": "Bird", "type": "Newpaper", "id": 2 },
];



// getting all books
const getBooks = ((req: Request, res: Response) => {
    res.status(200).json({books});

});

// adding a book
const addBook = async (req: Request, res: Response, next:NextFunction) => {
    // get the data from req.body
    let book = req.body;
    let id = 1;
    
    //let id = req.params.body;
    
    books.forEach((item) => {
        if (item.id >= id) 
        {
            id = item.id +1;
        }
        else {
            next();
        }
      });
      book.id = id;
      books.push(book);
    res.status(201).json(book);
    
}

const deleteBook = async (req: Request, res: Response) => {
    // get the post id from req.params and delete
    books = books.filter(({ id }) => id !== parseInt(req.params.id));
    // return list of books 
    return res.status(200).json(books);
};
 
// updating a post
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    // get the book id from the req.params
    const getBook = books.find(i => i.id === parseInt(req.params.id));

    if(!getBook) return res.status(404).json({})
    else {
        console.log(getBook);
        getBook.title = req.body.title;
        getBook.type = req.body.type;
        getBook.id = parseInt(req.params.id);
        res.json(getBook);
    }
}
 
export default { getBooks, addBook, deleteBook, updateBook };