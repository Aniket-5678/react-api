import React, { useEffect, useState } from "react";
import "../style/style.css";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("")

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();

        setDogs(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogs();
  }, []);


  const findDogs = async() => {
    try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}`);
        const data = await res.json();
        setDogs(data);
        setText("")
    } catch (error) {
        console.log(error);
    }
  }

  const handleSubmit = (e) => {
 e.preventDefault()

 findDogs()
  }

  return (
    <div className="home-container">
      {!dogs ? (
        <>
          <div>
            <h3>Loading....</h3>
          </div>
        </>
      ) : (
        <>
          <div className="home-main">
            <div className="home-heading">
              <h3> The Dog App</h3>
            </div>

            <div className="home-input">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for dog / Breed" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="home-data">

              <div className="home-api">
                {dogs.map((dog) => (
                    <Link className="home-link"  to={`/${dog.name}`} key={dog.id} >
                  <div className="home-content" >


                    {dog.reference_image_id ? (
                      <img
                         src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        className="dog-image"
                       
                      />
                    ) : (
                      <img
                        src="https://via.placeholder.com/150"
                        alt="No image available"
                        className="dog-image"
                      />
                    )}
                    
                <h4>{dog.name}</h4>
                <p>Bred for: {dog.bred_for}</p>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
