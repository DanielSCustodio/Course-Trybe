module.exports=(err,req,res,next) => {
  console.error(err);
  res.status(500).json({code: 'internaç_servidor_error',message: 'error processing request'});
}