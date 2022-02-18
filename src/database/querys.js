export const querys = {
    //Gestion Productos
    getAllProducts: "SELECT TOP(500) * FROM producto",
    getProducById: "SELECT * FROM producto Where Id = @Id",
    addNewProduct:
      "INSERT INTO producto (nombre, descripcion, stock, imagen) VALUES (@name,@description,@quantity,null);",
    deleteProduct: "DELETE FROM producto WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM producto",
    updateProductById:
      "UPDATE producto SET nombre = @name, descripcion = @description, stock = @quantity WHERE Id = @id",
    
      //Gestion Usuarios
    getAllUsers: "SELECT TOP(500) * FROM usuario",
    getUserById: "SELECT * FROM usuario Where id_usr = @id",
    addNewUser:
      "INSERT INTO usuario (nickname_usr, password_usr, nombre_usr, cedula_usr, direccion_usr, celular_usr,telefono_usr,fecha_nac_usr,ultima_con_usr,id_tipo_usr ) VALUES (@nickname, @password, @nombre, @cedula, @direccion, @celular, @telefono, @fecha_nac, @ultima_con, @id_tipo);",
    deleteUser: "DELETE FROM usuario WHERE id_usr= @id",
    getTotalUsers: "SELECT COUNT(*) FROM usuario",
    updateUserById:
      "UPDATE usuario SET nickname_usr = @nickname, password_usr= @password, nombre_usr = @nombre, cedula_usr = @cedula, direccion_usr = @direccion, celular_usr = @celular ,telefono_usr = @telefono,fecha_nac_usr = @fecha_nac,ultima_con_usr = @ultima_con,id_tipo_usr=@id_tipo WHERE Id = @id",
  };