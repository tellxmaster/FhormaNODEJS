import { getConnection, querys, sql } from "../database";

export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUser = async (req, res) => {
  const { nickname, nombre, cedula, fecha_nac, id_tipo} = req.body;
  let { ultima_con, password, direccion, celular, telefono,} = req.body;

  ultima_con = '2000-03-12';

  //validación datos
  if (nickname == null || password == null || nombre == null || cedula == null || fecha_nac == null || direccion == null || celular == null ) {
    return res.status(400).json({ msg: "Bad Request. Porfavor rellena todos los datos" });
  }

  if (telefono== null) telefono = '000000000';

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nickname", sql.Char, nickname)
      .input("password", sql.Char, password)
      .input("nombre", sql.VarChar, nombre)
      .input("cedula", sql.VarChar, cedula)
      .input("direccion", sql.Text, direccion)
      .input("celular", sql.VarChar, celular)
      .input("telefono", sql.VarChar, telefono)
      .input("fecha_nac", sql.Date, fecha_nac)
      .input("ultima_con", sql.Date, ultima_con)
      .input("id_tipo", sql.Int, id_tipo)
      .query(querys.addNewUser);

    // res.json({ nickname, password, nombre, cedula, direccion, celular, telefono, fecha_nac, ultima_con, id_tipo});
    // res.redirect('/index');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// export const getProductById = async (req, res) => {
  // try {
    // const pool = await getConnection();
// 
    // const result = await pool
      // .request()
      // .input("id", req.params.id)
      // .query(querys.getProducById);
    // return res.json(result.recordset[0]);
  // } catch (error) {
    // res.status(500);
    // res.send(error.message);
  // }
// };
// 
// export const deleteProductById = async (req, res) => {
  // try {
    // const pool = await getConnection();
// 
    // const result = await pool
      // .request()
      // .input("id", req.params.id)
      // .query(querys.deleteProduct);
// 
    // if (result.rowsAffected[0] === 0) return res.sendStatus(404);
// 
    // return res.sendStatus(204);
  // } catch (error) {
    // res.status(500);
    // res.send(error.message);
  // }
// };
// 
// export const getTotalProducts = async (req, res) => {
  // const pool = await getConnection();
// 
  // const result = await pool.request().query(querys.getTotalProducts);
  // console.log(result);
  // res.json(result.recordset[0][""]);
// };
// 
// export const updateProductById = async (req, res) => {
  // const { description, name, quantity } = req.body;
// 
  //validating
  // if (description == null || name == null || quantity == null) {
    // return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  // }
// 
  // try {
    // const pool = await getConnection();
    // await pool
      // .request()
      // .input("name", sql.VarChar, name)
      // .input("description", sql.Text, description)
      // .input("quantity", sql.Int, quantity)
      // .input("id", req.params.id)
      // .query(querys.updateProductById);
    // res.json({ name, description, quantity });
  // } catch (error) {
    // res.status(500);
    // res.send(error.message);
  // }
// };