import { Component} from 'react';
import Moment from 'moment';


class ApiNews extends Component {

    static getNews() {
    
            // `${BASE_URL}`
            let BASE_URL = 'https://api.canillitapp.com';
            const date=new Date();
            const dateApi=Moment(date).format('YYYY-MM-DD') 
    
            return fetch(`${BASE_URL}/latest/${dateApi}`)
            .then(reponse=>{
                console.log(reponse);
                return reponse.json();
            })
            
      }

      static getNewsSearch(search) {
    
        // `${BASE_URL}`
        let BASE_URL = 'https://api.canillitapp.com';
        return fetch(`${BASE_URL}/search/${search}`)
        .then(reponse=>{
            console.log(reponse);
            return reponse.json();
        })
        
  }

}
export default ApiNews;