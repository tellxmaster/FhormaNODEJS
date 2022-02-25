import express, { response } from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
// import userRoutes from "./routes/users.routes";
import morgan from "morgan";
import config from "./config";
import path from 'path';
import bodyParser from "body-parser";

const app = express();

//Configuración del puerto
app.set('port', config.port) ;
app.set('frontend', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", productRoutes);
app.use("/", productRoutes);
app.use("/index", productRoutes);
app.use("/ingreso", productRoutes);
app.use("/registro", productRoutes);

// app.get('/catalogo', (req,res) => {
//     console.log(req.getProducts.body);
//     //res.render('catalogo',{productos:productos})
// })
  

export default app


