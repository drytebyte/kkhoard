// pages/api/seed/index.js
import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  await Product.deleteMany();

  const sampleProducts = [
    {
      name: 'Golden Watch',
      slug: 'golden-watch',
      price: 250,
      image: '/sample.jpg',
      brand: 'LuxuryTime',
      category: 'Accessories',
      countInStock: 5,
      description: 'Elegant gold watch for stylish individuals.',
    },
    {
      name: 'Elegant Handbag',
      slug: 'elegant-handbag',
      price: 180,
      image: '/sample.jpg',
      brand: 'RoyalBags',
      category: 'Fashion',
      countInStock: 8,
      description: 'Stylish black and gold handbag for every occasion.',
    },
    {
      name: 'Sneakers Elite',
      slug: 'sneakers-elite',
      price: 120,
      image: '/sample.jpg',
      brand: 'SwiftWalk',
      category: 'Shoes',
      countInStock: 10,
      description: 'High-performance sneakers with premium comfort.',
    },
  ];

  await Product.insertMany(sampleProducts);

  res.status(201).json({ message: 'Seeded successfully', products: sampleProducts });
}

