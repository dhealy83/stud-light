const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^([A-Za-z0-9_\.-]+)@([A-Z\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
      },
      message: (email) => `${email.value} is not a valid email. Please try again.`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  collections: [{ type: Schema.Types.ObjectId, ref: "Collection" }],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
