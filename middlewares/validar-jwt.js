const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req, res = response, next) => {
  const authorization = req.header("Authorization");

  const cut = authorization.split(" ");
  let token = null;
  if (cut.length > 1) {
    token = cut[1];
  }

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There is no token in the request",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid token",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
