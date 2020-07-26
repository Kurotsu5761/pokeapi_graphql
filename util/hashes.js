const crypto = require("crypto");
const { CryptoConstants } = require("./constants");

const getSalt = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

const sha512 = (password, salt) => {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  let value = hash.digest("hex");
  return {
    salt,
    hashed: value,
  };
};

const saltHashPassword = (password, flag) => {
  let salt = getSalt(16);
  switch (flag) {
    case CryptoConstants.SHA512:
      return sha512(password, salt);
  }
};

const compareHash = (password, salt, hased, flag) => {
  switch (flag) {
    case CryptoConstants.SHA512: {
      return {
        result: sha512(password, salt).hashed == hashed,
        password,
        salt,
        hashed,
      };
    }
  }
};

module.exports = {
  saltHashPassword,
  compareHash,
};
