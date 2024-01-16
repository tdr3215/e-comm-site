import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../api/products';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../utils/types/Product';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const defaultProduct: Product = {
    name: 'Default Product',
    description: 'This is a test product',
    imgURL: 'picture',
    id: 'random id for product',
    price: 'free.99',
  };
  {
    const [product, setProduct] = useState<Product>(defaultProduct);

    const findProduct = async (id: string) => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    };

    const navigate = useNavigate();
    useEffect(() => {
      const findByID = async (id: string) => {
        const found = await findProduct(id);

        setProduct(found);
      };
      findByID(id!);
    }, []);

    const delProduct = async () => {
      await api.delete(`/products/${id}`);
      navigate('/products');
    };

    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mx-auto">
              <h1>{product.name}</h1>
              <img
                className="img"
                src={product.imgURL}
                style={{ maxWidth: '32rem' }}
              />
            </div>

            {/* Card */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2">#{product.name}</h6>
                  <p className="card-text">{product.description}</p>
                  <span>${product.price}</span>
                </div>
              </div>
              <button className="btn btn-info">Add to Cart</button>
              <Link to={`/products/${id}/edit`} className="btn btn-warning">
                Edit
              </Link>
              <a href="#" onClick={delProduct} className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { ProductDetails };
