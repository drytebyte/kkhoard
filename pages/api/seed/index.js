import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  const sampleProduct = {
    name: 'Sample Product',
    description: 'This is a sample product.',
    price: 49.99,
    image: '/sample.jpg',
  };

  await Product.deleteMany();
  await Product.create(sampleProduct);

  res.status(200).json({ message: 'Seeded successfully' });
}
