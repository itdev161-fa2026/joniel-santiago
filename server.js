import express from 'express';
import connectDatabase from './config/db.js';
import {check, validationResult } from 'express-validator';

// Initial express application
const app = express();


// Connect to the database
connectDatabase();


app.use(express.json({extend: false}));
// API Endpoints
/**
 * @route GET /
 * @desc  Test endpoint
 */

app.get('/', (req, res) => 
    res.send('http get request sent to root api endpoint')
);

/**
 * @route
 * @desc
 */
app.post('/api/users', [
    check ('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    } else {
    // Later we will save the user to the database here
    return res.send(req.body);
}
console.log(req.body);
res.send(req.body);
});

// Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
