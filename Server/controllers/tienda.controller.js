const tiendas =require("../models/tienda.model");

module.exports.get_all = (req,res) => {
    tiendas.find().sort({tipo :1})
    .then(tiendas => res.json(tiendas))
    .catch(err => {
        res.status(400).json(err);
    });
}

module.exports.create_ventas = (req,res) => {
    tiendas.create(req.body)
    .then(tiendas => res.json(tiendas))
    .catch(err => {
        res.status(400).json(err);
    });
}

module.exports.get_prendas = (req, res) => {
    tiendas.findOne({_id: req.params.id})
        .then(tienda => res.json(tienda))
        .catch(err =>{
            res.status(400).json(err);
        });
}
module.exports.update_tiendas = (req, res) => {
    tiendas.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(tiendas => res.json(tiendas))
        .catch(err =>{
            res.status(400).json(err);
        });
}
module.exports.delete_tiendas = (req, res) => {
    tiendas.deleteOne({_id: req.params.id})
        .then(tienda => res.json(tienda))
        .catch(err =>{
            res.status(400).json(err);
        });
}

