// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id'
});

// Categories have many Products
Catagory.hasMany(Product, {
  foreignKey: 'catagory_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'ProductTag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'ProductTag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
