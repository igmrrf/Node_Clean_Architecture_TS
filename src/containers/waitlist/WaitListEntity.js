/**
 https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html
 *A class method maps to a schema method, a static method maps to a schema static,
 and getters/setters map to virtuals.
*/

class Contact {
  getPublicFields() {
    return {
      email: this.email,
      discord: this.discord,
      twitter: this.twitter,
      eth_address: this.eth_address,
      _id: this._id,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

export default Contact;
