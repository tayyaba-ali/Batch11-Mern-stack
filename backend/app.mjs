import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
import path from 'path';

import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectToDb from "./db/db.js";
import cartRoutes from "./routes/cartRoutes.js"



app.use(
	cors({
		origin: ['http://localhost:5173', 'http://localhost:5174',"https://batch11-mern-stack-1.onrender.com"],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
const __dirname = path.resolve();

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

// connect to db
connectToDb();

// middlewares

// app.get("/",(req,res)=>{
//   res.send("server is active")
// })

app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes);


// app.use('/api/products', productRoutes);

app.listen(PORT, () => {
	console.log('server is listening 5000');
});
