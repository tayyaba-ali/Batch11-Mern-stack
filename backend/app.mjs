import express from 'express';
const app = express();

import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectToDb from "./db/db.js";
import cartRoutes from "./routes/cartRoutes.js"


app.use(
	cors({
		origin: ['http://localhost:5173', 'http://localhost:5174'],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
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

app.listen(5000, () => {
	console.log('server is listening 5000');
});
