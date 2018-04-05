/**
 * Created by Amol
 */

const express = require('express');
const app = express();
const quotes = require('./quotesObject');
//New Comment
app.use(express.json());
//New Comm
app.get('/api/get-quotes/:id',(req, res) => {
    const quote = quotes['quotes'][req.params.id];
    res.jsonp(quote);
    
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));