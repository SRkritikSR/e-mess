const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan')                
const fs = require('fs')
const path = require('path')


const app = express();

//connect database
connectDB();


const cors = require('cors');
// previously the origin values was "*" but due to hosting problems in render we have changed it to localhost 3000 or the 
//url where the frontend of our app would be hosted.
const corsOpt = {
    origin: ["http://localhost:3000", "https://e-mess-frontend.onrender.com"],
    credentials: true,
    methods: ['GET','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
    exposedHeaders: ['Content-Type', 'x-auth-token']
};
app.use(cors(corsOpt));


// to make req.body work 
app.use(express.json());

app.get('/',(req,res) => res.send('API Running'));

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logger.log'), { flags: 'a' })


//define routes

app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms',{stream:accessLogStream}));
app.use('/api/profile',require('./routes/api/profile'));
// Register
app.use('/api/users',require('./routes/api/users'));
app.use('/api/employee',require('./routes/api/employee'))
app.use('/api/admin',require('./routes/api/admin'));
// Login
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/authadmin',require('./routes/api/authadmin'));
app.use('/api/authemployee',require('./routes/api/authemployee'));

app.use('/api/menu', require('./routes/api/menu'))
app.use('/api/commentsection', require('./routes/api/commentsection'))
app.use('/api/credits',require('./routes/api/credits'))
app.use('/api/receipt',require('./routes/api/receipt'))
app.use('/api/food',require('./routes/api/food'))
// app.use('/insertFood',require('./insertFood'))


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));

module.exports = app




