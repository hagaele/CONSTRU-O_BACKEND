const mongoose = require('mongoose');

// Middleware para validar o formato do ID do MongoDB 
function validarID(req, res, next) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }
  next();
}

module.exports = {
  validarID
};