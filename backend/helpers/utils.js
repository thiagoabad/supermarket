const crypto = require('crypto');

const uuidv4 = () => {
  return crypto.randomUUID();
};

exports.uuidv4 = uuidv4;