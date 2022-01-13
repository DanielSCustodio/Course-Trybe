const imc = (weight, height) => {
  return (weight/Math.pow(height, 2));
}

module.exports = imc;