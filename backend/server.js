import express from 'express';
 const app = express();
import Data from './Data';


 app.get("/api/products/", (req, res) =>{
   res.send(Data.products);
 });

 app.listen(5000, () =>{
 console.log('app is running on 5000')
 });