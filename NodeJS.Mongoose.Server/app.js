var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');

var app = express();

var db = 'mongodb://localhost/example';
var port = 8080;

mongoose.connect(db);

app.use(bodyParser.json());
// Below line is to run with postman etc.
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World!! Welcome');
});

app.get('/books', function (req, res) {
    console.log('getting all books');
    Book.find({})
        .exec(function (err, books) {
            if (err) {
                res.send('Error occurred while reading all books');
            } else {
                res.json(books);
            }
        });
});

app.get('/books/:id', function (req, res) {
    console.log('getting one book');
    Book.findOne({
            _id: req.params.id
        })
        .exec(function (err, book) {
            if (err) {
                res.send('Error occurred while reading book: ' + req.params.id);
            } else {
                res.json(book);
            }
        });
});

app.post('/book', function (req, res) {
    console.log('creating a new book');
    var newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function (err, book) {
        if (err) {
            res.send('Error occurred while inserting book');
        } else {
            res.json(book);
        }
    })
});

app.post('/createBook', function (req, res) {
    console.log('creating a new book');
    Book.create(req.body, function (err, book) {
        if (err) {
            res.send('Error occurred while inserting book');
        } else {
            res.json(book);
        }
    })
});

app.put('/updateBook/:id', function (req, res) {
    console.log('finding and updating a book');
    Book.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title
            }
        }, {
            upsert: true
        },
        function (err, book) {
            if (err) {
                res.send('Error occurred while updating book');
            } else {
                console.log('sending response 204');
                res.status(204); // Taking sooo long in postman
            }
        });
});

app.delete('/removeBook/:id', function (req, res) {
    console.log('finding and removing a book');
    Book.findOneAndRemove({
        _id: req.params.id
    }, function (err, book) {
        if (err) {
            res.send('Error occurred while deleting book');
        } else {
            console.log('sending response 204');
            //res.status(204); // not working again
        }
    });
});

app.listen(port, function () {
    console.log('Server listening at port: ' + port);
});
