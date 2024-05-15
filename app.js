const path = require('path');

const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dirname is available thanks to require path

app.use(express.static('public')); //we serve this folder separately for the user

app.use(authRoutes);

app.listen(3000);