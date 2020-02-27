const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))

const standInBefore = [
    {
        id: 3,
        type: 'Western Bacon BBQ Burger'
    },
    {
        id: 4,
        type: 'Beyond Burger'
    },
    {
        id: 5,
        type: 'Big Mac'
    }
];

const standInAfter =[
    {
        id: 1,
        type: 'Veggie Burger'
    },
    {
        id: 2,
        type: 'Baby you can Chive my Car'
    }
]

app.get('/', function(req, res) {
    res.render('index', {
        before: standInBefore,
        after: standInAfter
    });
})

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server listening at http://localhost:" + PORT);
})