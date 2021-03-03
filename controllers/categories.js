const category = require('../models/category')
const product = require('../models/product')

const getCategories = db => async (req, res) => {
  const products = await product.getProductsByCategoryId(db)(req.params.id)
  const cat = await category.getCategoryById(db)(req.params.id)
  res.render('category', {
    products,
    cat
  })
}

module.exports = {
  getCategories
}