// ***************************************************************************************************
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// var bcrypt = require("bcrypt-nodejs");



// ***************************************************************************************************

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
      isEmail: true
    }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1]
      }
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //paments stuff needed here
    rating:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1]
      }
    },
    profilepicture:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1]
      }
    }




  });

    User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };


  // Password:
  // **********************************************************************************************************************************************************************

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  // **********************************************************************************************************************************************************************

  return User;
};
