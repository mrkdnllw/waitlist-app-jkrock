module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        tag: String,
        phone: String
        //published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Waitlistee = mongoose.model("Waitlistee", schema);
    return Waitlistee;
  };