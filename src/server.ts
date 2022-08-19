import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello world");
});

app.listen(3000, () => console.log("🚀 is listening on port 3000"));
