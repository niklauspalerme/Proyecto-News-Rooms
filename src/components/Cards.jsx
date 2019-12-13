import React, {Fragment}from 'react';
import Moment from 'moment';



function Cards (props){

    //console.log('Este es el componente ',props)

    const {photo,title,url,date,source}= props

    //console.log ('Esta es la fecha', Moment(date).format('YYYY-MM-DD'), source)
    console.log (`Este es el nro en fecha -> ${date}`)
    const date1=new Date(date*1000);
    const dateApi=date1.toLocaleString()

      return (
        <Fragment>
           <div className="card">

            {/* Imagen */}
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={photo} alt={title} />
                </figure>
            </div>

            {/* Contenido de la Card */}
            <div className="card-content">

                <a href={url} className="title is-4">{title}</a>
                
                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>

                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info"></span>
                            <span className="tag is-medium"> <b>Fuente: </b>  </span>
                            <span className="tag is-medium" style={{paddingLeft:'0'}}> {source} </span>
                        </div>
                    </div>

                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info"></span>
                            <span className="tag is-medium"><b>Fecha: </b></span>
                            <span className="tag is-medium" style={{paddingLeft:'0'}}> {dateApi} </span>
                        </div>
                    </div>

                </div>

            </div>
           </div>


        </Fragment>
      
    );}
  

export default Cards;