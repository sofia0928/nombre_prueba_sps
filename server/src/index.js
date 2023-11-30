import app from './app.js';
import { config } from 'dotenv';
import connection from './mongo.js';

config();
const PORT = process.env.PORT || 5000

connection();
app.listen(PORT, ()=>console.log(` Server running on port ${PORT}`));
