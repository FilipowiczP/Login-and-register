import express from 'express';
import {AdminController} from './src/admin';

const app = express();
app.use(AdminController);
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));