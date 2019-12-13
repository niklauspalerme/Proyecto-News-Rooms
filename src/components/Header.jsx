import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const categoria = ['Politica','Internacionales','Deportes','Tecnologia','Espectaculos'];

const linkscategorias= categoria.map(
  cat=>{
    return <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className='navbar-item'>{cat}
            </Link> 
        })


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {

    return (
      <Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title">New Feed Rooms</h1>
          <nav className='navbar'>
            <div className='container'>

              <div className='navbar-menu'>

                <Link to='/' className='navbar-item'>Home</Link>
                {linkscategorias}

                <SearchBar/>
                
              </div>

            </div>
          </nav>
        </div>
      </section>
      </Fragment>
    );
  }
}

export default Header;
