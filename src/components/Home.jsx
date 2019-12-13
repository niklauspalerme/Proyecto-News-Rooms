import React, { Component, Fragment } from 'react';
import Card from './Cards';
import ApiNews from './Api'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'


//Notas
//Usando withRouter te permite acceder estos 3 parametros
// console.log(this.props.history)
// console.log(this.props.location) 
// console.log(this.props.match)

//Styled-Component
const Title = styled.h1`
  font-size: 4em;
  color: #1c9fee;
  margin-bottom: 48px;
`;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news:[],
    };
  }

  //Consumir la API
  componentDidMount(){

    ApiNews.getNews().then(news1=>this.setState({news:news1}))

   }

  //Metodo Render
  render() {

    //Creación de las cards 
    const ListCards=this.state.news.map((noticia)=>(
      <div className="column is-one-third" key={noticia.news_id}>
          <Card 
            photo={noticia.img_url} 
            title={noticia.title} 
            url={noticia.url} 
            source={noticia.source_name}
            date={noticia.date}/>
      </div>
   ));

    //Ver toda la API 
    console.log(this.state.news)

    //Return
    return (

      <Fragment>
      <section className="section" style={{paddingTop:'0px'}}>
        <div className="container">
            <Title>Home</Title>
            <div className="columns is-multiline">
                {ListCards}
            </div>
        </div>
      </section>

      </Fragment>
    );
  } //Fin de render
} //FIn de la clase

export default withRouter(Home);







