import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import "../style/style.css"
import { FaLongArrowAltLeft } from "react-icons/fa";




const SingleDog = () => {
const [dog, setDog] = useState([])
const {name} = useParams()

useEffect(() => {
    const fetchSingleDogs = async () => {
      try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        const data = await res.json();

        setDog(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleDogs ();
  }, []);

  return (
    <div className='singledog-container'>
      <div className='single-content-main'>
        {dog.map((item) => (
          <div className='single-main' key={item.id}>
            <div className='single-images'>
              <img className='single-img' src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt={item.name} />
            </div>
         
         <div className='single-description'>
            <h3>Bred for : {item.bred_for}</h3>
            <p> {item.breed_group}</p>
            <h4> life_span : {item.life_span}</h4>
            <p> temperament : {item.temperament}</p>
            <h4>{item.origin}</h4>
            <Link className='back' to='/'><FaLongArrowAltLeft size={"25px"}/> Back</Link>
         </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleDog