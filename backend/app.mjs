import express from 'express';
const app = express();
<<<<<<< HEAD
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import connectToDb from './db/db.js';
import cartRoutes from './routes/cartRoutes.js';
=======
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectToDb from "./db/db.js";
import cartRoutes from "./routes/cartRoutes.js"
>>>>>>> e33c90d179292d9e7de7fad6d08f6f7e2d50fef9

app.use(cors());
app.use(express.json());

// connect to db
connectToDb();

// middlewares

// app.get("/",(req,res)=>{
//   res.send("server is active")
// })
<<<<<<< HEAD
app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes);
=======
app.use("/api/auth", userRoutes);
app.use("/api/cart",cartRoutes)
>>>>>>> e33c90d179292d9e7de7fad6d08f6f7e2d50fef9

// app.use('/api/products', productRoutes);

app.listen(5000, () => {
	console.log('server is listening 5000');
});
