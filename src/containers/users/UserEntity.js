/**
 https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html
 *A class method maps to a schema method, a static method maps to a schema static,
 and getters/setters map to virtuals.
*/

class User {
  getPublicFields() {
    return {
      eth_address: this.eth_address,
      username: this.username,
      email: this.email,
      discord: this.discord,
      twitter: this.twitter,
      type: this.type,
      nft: this.nft,
      coupons: this.coupons,
      stripe_customer: this.stripe_customer,
      created_by: this.created_by,
      _id: this._id,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

export default User;
