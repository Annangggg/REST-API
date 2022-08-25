import express from 'express';
import { errorHandler, notFoundHandler } from './middleware';
import router from './routes/books';

const app = express();


app.use(express.json());
app.use('/api/books', router);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(3000, () => console.log("🚀 is listening on port 3000")); 

