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

app.put('/devour/:id', function(req, res) {
    db.query("UPDATE burgers SET status = 'eaten' WHERE id = ?;", req.params.id, function(err, result) {
        if(err) throw err;
        res.status(200).end();
    })
})

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server listening at http://localhost:" + PORT);
})