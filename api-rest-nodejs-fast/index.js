const express = require('express');
// FAKE DATABASE
let books =[];
// CRIAR APP
const app = express();

app.use(express.json());

app.post("/books", (req, res) => {
    const { id, title, author, publishedAt } = req.body;
    const book = { id, title, author, publishedAt };
    books.push(book);
    return res.status(201).json(book);
});

// MANDAR O SERVIDOR RODAR

app.listen(3333, () => console.log("O servidor está funcionando"))