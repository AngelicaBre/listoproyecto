const mongoose = require("mongoose");

const EsquemaTienda = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Categoria obligatoria."],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },
    tipo: {
        type: String,
        minLength: [3, "Tipo de prenda debe tener al menos 3 caracteres"]
    },

    descripcion: {
        type: String,
        minLength: [6, "La descripción debe tener al menos 6 caracteres"]
    },
    precio: {
        type: Number,
        min: [500, "Precio debe ser entre 500 colones a 6000 colones"],
        max: [6000, "Precio debe ser entre 500 colones a 6000 colones"]
    },
    contacto: {
        type: Number,
        require: [true, "Contacto es obligatorio."],
        maxNumber: [8, "Contacto debe tener maximo 8 digitos"]
    },
    imagen:{
        type:String,
        
    }
}, { timestamps: true, versionKey: false });

const tiendas = mongoose.model("tiendas", EsquemaTienda);
module.exports = tiendas;