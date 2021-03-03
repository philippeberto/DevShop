const getProductById = db => async (id) => {
  const product = await db('products').select('*').where('id', id)
  return product[0]
}

//select * from products 
//where id in 
//  (select product_id from categories_products
//  where category_id = 3 and product_id = id)
const getProductsByCategoryId = db => async (id) => {
  const products = await db('products').select('*').where('id', function () {
    this
      .select('categories_products.product_id')
      .from('categories_products')
      .whereRaw('categories_products.product_id = products.id')
      .where('category_id', id)
  })
  return products
}

module.exports = {
  getProductById,
  getProductsByCategoryId
}