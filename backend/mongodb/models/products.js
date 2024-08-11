import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  images: [ 
    { 
      type: String 
    } 
  ],
  price: { 
    type: Number, 
    required: true 
  },
  sizes: [ 
    { 
      type: String 
    } 
  ],
  categories: [ 
    { 
      type: String 
    } 
  ],
  discount: { 
    type: Number, 
    default: 0 
  }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Product = mongoose.model('Product', productSchema);

export default Product;