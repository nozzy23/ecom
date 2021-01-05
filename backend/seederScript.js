require('dotenv').config();

const productData= require ('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/product')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data import success");

        process.exit();
    } catch (error){
        console.error("error with data import");
        process.exit(1)
    }
};

importData();