import React, { Component, Fragment } from 'react';
import Card from './Cards';
import ApiNews from './Api'
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

class News extends Component {

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

   FilteredNEws(){

    let newsFiltered = this.state.news

    //Aqui capturo el path/ruta para filtrar -> this.props.location.pathname
    //Lo hago de esta forma ya que pareciera que carga la API mas rapida

    if (this.props.location.pathname==='/category/Politica')
      return newsFiltered.filter(card=>card.category==='Política')
    else if (this.props.location.pathname==='/category/Internacionales')
      return newsFiltered.filter(card=>card.category==='Internacionales')
    else if (this.props.location.pathname==='/category/Deportes')
      return newsFiltered.filter(card=>card.category==='Deportes')
    else if (this.props.location.pathname==='/category/Tecnologia')
      return newsFiltered.filter(card=>card.category==='Tecnología')
    else if (this.props.location.pathname==='/category/Espectaculos')
      return newsFiltered.filter(card=>card.category==='Espectáculos')

   }


  //Metodo Render
  render() {

    //LLamo Metodo FilteredNews para filtrar la noticia 
    let noticiasFiltradas=this.FilteredNEws()
    console.log(noticiasFiltradas)

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
              <Title>{this.props.match.params.query}</Title>
              <div className="columns is-multiline">
                  {ListCards}
              </div>
          </div>
        </section>
      </Fragment>
    );
  } //Fin de render
} //FIn de la clase

export default News;
