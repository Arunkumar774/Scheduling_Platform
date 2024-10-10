const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/dbConnection");
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

// Define routes (you'll create these in the routes directory)
app.use('/api/auth', authRoutes);
// app.use('/api/schedule', require('./routes/schedule'));

app.get("/", (req,res) => {
    res.send("Hello");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
