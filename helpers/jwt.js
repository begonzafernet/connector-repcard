const jwt = require("jsonwebtoken");

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {},
      (err, token) => {
        if (err) {
          console.log(err);
          reject("The token cant be generated");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
