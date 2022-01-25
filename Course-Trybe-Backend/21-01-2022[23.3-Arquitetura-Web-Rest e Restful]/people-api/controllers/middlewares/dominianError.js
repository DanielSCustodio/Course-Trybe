module.exports=(err,req,res,next) => {
  const errorMap={
    not_found: 404
  }
  const status=errorMap[err.code];
  if(!status) {
    return next(err);
  }
  res.status(status).json(err);
}