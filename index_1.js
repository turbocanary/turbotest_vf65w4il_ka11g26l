const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = crypto.randomBytes(4).readUInt32BE(0) * Math.pow(2, -32);
  var password = "sssAAAA" + suffix;
  return password;
}