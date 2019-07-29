import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const data=[
    {
      name: "",
      url: "http://www.indianfurnitureproducts.com/wp-content/uploads/2014/03/HotelRestaurant1.jpg"
    },
    {
      name: "",
      url:"https://setupmyhotel.com/images/Type-of-service-table-service.jpg"
      },
    {
      name:"",
        url:"http://www.indiavoyages.com/hotels-in-cities/images/fortune1.jpeg"
    },
    {
      name:"",
      url: "https://ui.cltpstatic.com/places/hotels/4155/41555/images/b2_w.jpg"
    }
]

class Home extends Component {
    render() {
        return (
              <div className="pa3 flex flex-wrap">
                 {data.map((dataValue) => 
                 <div className="outline w-30 h-30 pa5 mr3 mt6 " >
                   <img src = {dataValue.url}/>
                   <Link to='register' className="f6 link dim br3 ph3 pv2 mb2 dib white bg-purple" href="#">Register</Link>
                 </div>
                  )}     
              </div>
        )
    }
}

export default Home;