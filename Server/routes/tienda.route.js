const productosController = require("../controllers/tienda.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/tiendas",  productosController.get_all);
    app.post("/api/tiendas", authenticate,productosController.create_ventas);
    app.get("/api/tiendas/:id", productosController.get_prendas);
    app.put("/api/tiendas/:id", authenticate, productosController.update_tiendas);
    app.delete("/api/tiendas/:id", authenticate, productosController.delete_tiendas);
    
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}