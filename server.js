const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI,)
.then(() => console.log("✅ Kết nối MongoDB thành công"))
.catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));


//Product
const productRoutes = require('./routes/productRoute');
console.log('productRoute:', productRoutes);
app.use('/api/products',productRoutes);
//Brand
const brandRoutes = require('./routes/brandRoute');
console.log('brandRoute:', brandRoutes);
app.use('/api/brands',brandRoutes);
//User
const userRoutes = require('./routes/userRoute');
console.log('userRoute:', userRoutes);
app.use('/api/users',userRoutes);
//CartItem
const cartItemRoutes = require('./routes/cartItemRoute');
console.log('cartItemRoute:', cartItemRoutes);
app.use('/api/cartItems', cartItemRoutes);
//Categorie 
const categorieRoutes = require('./routes/categorieRoute');
app.use('/api/categories', categorieRoutes);
//Order
const orderRoutes = require('./routes/oderRoute');
app.use('/api/orders', orderRoutes);
//Review
const reviewRoutes = require('./routes/reviewRoute');
app.use('/api/reviews', reviewRoutes);
//Wishlist
const wishlistRoutes = require('./routes/wishListRoute');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
