const jwt = require("jsonwebtoken");

const secret = "studlight";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.hearders.authorization;

    if (req.hearders.authorization) {
      token = token.split("").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },

  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
