import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

import {
  getUsers,
  createNewUser,
  // getUserById,
  // deleteUserById,
  // getTotalUsers,
  // updateUserById,
} from "../controllers/users.controller";


router.get("/usuarios", getUsers);

router.post("/usuarios", createNewUser);

// router.get("/usuarios/count", getTotalUsers);

// router.get("/usuarios/:id", getUserById);

// router.delete("/usuarios/:id", deleteUserById);

// router.put("/usuarios/:id", updateUserById);

router.get('/', (req,res) => {
  res.render('index',{
    title: 'Inicio'
  });
})

router.get('/catalogo', (req,res) => {
  res.render('catalogo',{
    title: 'Productos'
  });
})


router.get('/ingreso', (req,res) => {
  res.render('login',{
    title: 'Ingreso'
  });
})


router.get('/registro', (req,res) => {
  res.render('registro',{
    title: 'Registro'
  });
})

router.post('/registro',(req,res) =>{
  // if(!req.body.)
  res.createNewUser
  res.redirect('/index');
});

export default router;