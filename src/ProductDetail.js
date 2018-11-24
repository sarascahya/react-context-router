import React from 'react'
import { Link } from 'react-router-dom';
import products from './products';
import Layout from './Layout';
import Context from './context';
import trans from './trans';

class ProductDetail extends React.Component {
  render(){
    // get slug
    const slug = this.props.match.params.slug;
    // find match product
    const product = products.find(product => product.slug === slug)
    return(
      <div className="container">
        <Layout/>
        <div className="columns">
          <div className="column is-12">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    {product.title}
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="title">{product.title}</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <figure className="image">
              <img
                alt={product.title}
                src={product.imageUrl}
              />
            </figure>
          </div>
          <div className="column is-5">
            <div className="column has-text-weight-semibold has-text-dark is-size-4">
              {product.price}
            </div>
            <div className="column">
              {product.description}
            </div>
            <div className="column">
              
              <Context.Consumer>
                {context => {
                  return(
                    <a className="button is-primary is-uppercase">{trans[context.state.language]['Add to Cart']}</a>
                  );
                }}
              </Context.Consumer>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;