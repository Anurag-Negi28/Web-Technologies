// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB Atlas
mongoose.connect('your-mongodb-atlas-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

// Define Mongoose schema and model
const User = mongoose.model('User', {
  username: String,
  email: String
});

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/users', (req, res) => {
  const { username, email } = req.body;
  const newUser = new User({ username, email });
  newUser.save((err) => {
    if (err) {
      console.error('Error saving user:', err.message);
      res.redirect('/');
    } else {
      res.redirect('/users');
    }
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error('Error finding users:', err.message);
      res.redirect('/');
    } else {
      res.render('users', { users });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});