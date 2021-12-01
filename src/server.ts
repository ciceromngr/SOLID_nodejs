import 'reflect-metadata'
import './app/database/index.ts'
import app from "./app";

app.listen(3333, () => console.log('Server is running'))