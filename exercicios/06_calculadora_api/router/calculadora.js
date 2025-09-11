const express = require('express');
const router = express.Router();

router.get('/somar', (req, res, next) => {
  const numA = parseFloat(req.query.numA);
  const numB  = parseFloat(req.query.numB);
  const resultado = numA + numB;
  res.json({ resultado });
});

router.get('/subtrair', (req, res, next) => {
    const numA = parseFloat(req.query.numA);
    const numB  = parseFloat(req.query.numB);
  const resultado = numA - numB;
  res.json({ resultado });
});

router.get('/multiplicar', (req, res, next) => {
    const numA = parseFloat(req.query.numA);
    const numB  = parseFloat(req.query.numB);
  const resultado = numA * numB;
  res.json({ resultado });
});

router.get('/dividir', (req, res, next) => {
    const numA = parseFloat(req.query.numA);
    const numB  = parseFloat(req.query.numB);
  if (numB === 0) {
    return res.status(400).json({ error: 'Divisão não permitida.' });
  }
  const resultado = Number(numA) / Number(numB);
  res.json({ resultado });
});

router.get('/aoQuadrado', (req, res, next) => {
    const numA = parseFloat(req.query.numA);
  const resultado = numA * numA;
  res.json({ resultado });
});

router.get('/raizQuadrada', (req, res, next) => {
    const numA = parseFloat(req.query.numA);
  if (numA < 0) {
    return res.status(400).json({ error: 'raiz quadrada de um número negativo.' });
  }
  const resultado = Math.sqrt(numA);
  res.json({ resultado });
});

module.exports = router;