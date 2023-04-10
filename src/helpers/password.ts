import bcrypt from "bcryptjs";

class Password {
  /**
   * Hashes a password
   * @param {String} password - Password to hash
   * @param {Number} saltRounds - Number of salt rounds
   */
  static hash(password: string, saltRounds = 10) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password, salt, (error: any, hash: string) => {
          if (error) {
            reject(error);
          }
          resolve(hash);
        });
      });
    });
  }

  /**
   * Compares a plain-text password with hashed password for a match
   * @param {String} password - Password in plain text
   * @param {String} hash - Hashed password
   */
  static compare(password: string, hash: string) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, success) => {
        if (err) {
          reject(err);
        }
        resolve(success);
      });
    });
  }
}

export default Password;
