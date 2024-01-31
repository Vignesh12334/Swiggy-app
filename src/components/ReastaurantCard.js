 import { CDN_URL} from '../utils/constants'

const ReastaurantCard = (props) => {
    const {resData}= props

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;


    return <div className='res-card'>
       <img className='res-logo'
        src={CDN_URL + cloudinaryImageId } />
       
           <h3>{name} </h3>
           <h4>{cuisines.join(', ')} </h4>
           <h4>{costForTwo} </h4>
           <h5>{avgRating} </h5>
    </div>
}


export default ReastaurantCard;