import express from 'express';
import controller from '../controllers/books';
const router = express.Router();

router.get('/', controller.getBooks);
router.put('/update/:id', controller.updateBook);
router.delete('/delete/:id', controller.deleteBook);
router.delete('/delete', controller.deleteAllBooks);
router.post('/add', controller.addBook);

export default router;