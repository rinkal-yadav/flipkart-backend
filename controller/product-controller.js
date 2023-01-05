import Product from "../model/product-schema.js"

export const getproducts = async (request, response) => {
  try {
    const products = await Product.find({})
    response.status(200).json(products)
  }
  catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getproductById = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findOne({ 'id': id })
      response.status(200).json(product)
      // console.log(product);
  } catch (error) {
    response.status(500).json({ message: error.message })

  }
}