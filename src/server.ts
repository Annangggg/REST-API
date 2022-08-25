import express from 'express';
import router from './routes/books';

const app = express();


app.use(express.json());
app.use('/api/books', router);

app.get('/', (req, res) => {
    res.send("Hello world");
});


app.listen(3000, () => console.log("🚀 is listening on port 3000")); 

