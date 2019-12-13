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

class NewsSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news:[],
      searchInfo:''
    };
  }

  //Consumir la API 1ra vez
  componentDidMount(){
    const search=this.props.match.params.query2
    console.log('Lo que colocas en el search'+ search)
    this.setState({searchInfo:search})
    ApiNews.getNewsSearch(search).then(news1=>this.setState({news:news1}))
   }


  //Actualiza los estados para hacer el cambio de la API
  componentDidUpdate(){

    const search=this.props.match.params.query2
    const state = this.state.searchInfo

    console.log('Lo que colocas en el search de DidUpdate'+ search)
    console.log('Esto es lo que tenés en el estado:' +state)

    if (search !== state )
      {ApiNews.getNewsSearch(search).then(news1=>this.setState({news:news1}))
        this.setState({searchInfo:search})}
  }


  //Metodo Render
  render() {

    //LLamo Metodo FilteredNews para filtrar la noticia 
    let noticiasFiltradas=this.state.news
    console.log(noticiasFiltradas)
    console.log('Esta es el estado de coso: ' + this.state.searchInfo)

    //Creación de las cards 
    const ListCards=noticiasFiltradas.map((noticia)=>(
      <div className="column is-one-third" key={noticia.news_id}>
          <Card 
            photo={noticia.img_url} 
            title={noticia.title} 
            url={noticia.url} 
            source={noticia.source_name}
            date={noticia.date}/>
      </div>
   ));

  
  //Return
  return (

      <Fragment>
      <section className="section" style={{paddingTop:'0px'}}>
        <div className="container">
            <Title>Busqueda: {this.props.match.params.query2}</Title>
            <div className="columns is-multiline">
                {ListCards}
            </div>
        </div>
      </section>

      </Fragment>
    );
  } //Fin de render
} //FIn de la clase

export default withRouter(NewsSearch);






