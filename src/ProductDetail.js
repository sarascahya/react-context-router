import React from 'react'
import { Link } from 'react-router-dom';
import products from './products';

class ProductDetail extends React.Component {
  render(){
    // get slug
    const slug = this.props.match.params.slug;
    // find match product
    const product = products.find(product => product.slug === slug)
    return(
      <div className="container">
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width={112}
                height={28}
              />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <div className="dropdown navbar-item ">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>en</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item is-active">
                    en
                  </a>
                  <a href="#" className="dropdown-item ">
                    id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
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
              <a className="button is-primary is-uppercase">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;