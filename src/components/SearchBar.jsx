import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Card from './Cards';
import ApiNews from './Api'
import {withRouter} from 'react-router-dom'



class SearchBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let hola= (event.target.elements.search.value)
    this.props.history.push(`/search/${hola}`);
  }

  
  //Metodo Render
  render() {
    
    //Return
    return (
      <Fragment>
       <div className='navbar-end'>
            <form className='panel-block' style={{marginRight:'20px'}}  onSubmit={event=>this.handleSubmit(event)}>
                <p className='control has-icons-left'>
                    <input className='input is-small' type='text' placeholder='Search' name='search'/>
                </p>
                <button class="button" style={{marginLeft:'5px'}} >
                  Busqueda
                </button>

            </form>
        </div>
      </Fragment>
    );
  } //Fin de render
} //FIn de la clase

export default withRouter (SearchBar);
