const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./config/connection')

const app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', async function(req, res) {
    let burgers = {
        before: await db.query("SELECT id, type FROM burgers WHERE status = 'pending'"),
        after: await db.query("SELECT id, type FROM burgers WHERE status = 'eaten';")
    }
    res.render('index', burgers);
})

app.post('/add', function(req, res) {
    console.log(req.body.burger);

    db.query("INSERT INTO burgers (type) VALUES (?)", req.body.burger, function(err) {
        if(err) throw err;
        res.redirect('/');
    })

})

app.post('/devour/:id', function(req, res) {
    console.log(req.params.id);
    res.redirect('/');
})

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server listening at http://localhost:" + PORT);
})