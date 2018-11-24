import React from 'react';
import { Link } from "react-router-dom";
import products from './products';
import Layout from './Layout';

class ProductList extends React.Component {
  render(){
    return(
      <div className="container">
        <Layout/>
        <div className="columns">
          <div className="column is-full">
            <div>
              <h3 className="title">Our Products</h3>
              <div className="columns">
                {/* looping product use map */}
                {products.map(product => {
                  return(
                    <div key={product.slug} className="column">
                      <Link to={`/product/${product.slug}`}>
                        <div className="card">
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img
                                alt={product.title}
                                src={product.imageUrl}
                              />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p className="title is-4">
                                  {product.title}
                                </p>
                                <div className="content">
                                  {product.description}<br />
                                </div>
                                <h5>{product.price}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;