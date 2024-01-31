import ReastaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [resobj, setResObj] = useState([])
   
  const [searchText , setSearchText] = useState("")

  const [filteredRestaurant , setFilteredRestaurant]  = useState([])

useEffect(() => {
    fetchData()
},[])


const fetchData = async  () => {
    const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999')

    const  json = await data.json()

    console.log(json)
    
 //Optional chaining
 setResObj(json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle?.restaurants)

 setFilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle?.restaurants)
   

}
     

    // //Conditional rendering
    // if( resobj.length === 0) {
    //   return <Shimmer />
    // }
  
    return resobj.length ===0 ? <Shimmer /> : ( <div className='body'>
    <div className='filter'>

      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
        }} />
        <button onClick={() => {
           
         const filteredRes = resobj.filter((res) => {
           return res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
         })


          setFilteredRestaurant(filteredRestaurant)

        }}>Search</button>  
      </div>
      
      <button className="filter-btn" onClick={()=> {
        //filtering the top res 
         const filteredList = resobj.filter((res) => {
          return res.info.avgRating > 4.5
        })
        setFilteredRestaurant(filteredList)

      }}>
        Top Rated Restaurant
      </button>
     </div>

    <div className='res-container'>
        {
          filteredRestaurant.map(restaurant => {
           return  <ReastaurantCard key={restaurant.info.id} resData={restaurant} />
          })

        }

        
        
    </div>
         
    </div>)
}

export default Body;