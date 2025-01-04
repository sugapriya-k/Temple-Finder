import React, { useState,useEffect } from "react";
import axios from "axios";
import * as BiIcons from "react-icons/bi";
import "./famous.css"

export const PopularTemples = () => {
  const [temples, setTemples] = useState([]);
  const [famousTemples,setFamousTemples]=useState([]);
  const [imageUrls, setImageUrls] = useState({});

  const fetchTemples = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/temples/famous?key=famous`);
      console.log(response.data);
      setFamousTemples(response.data);
    } catch (error) {
      console.error('Error fetching temples:', error);
    }
  };
  useEffect(()=>{
    fetchTemples()
  },[])

  const fetchImage = (templeId) => {
    axios.get(`http://localhost:8080/temples/getimg/${templeId}`, { responseType: 'blob' })
      .then((response) => {
        
        const imageUrl = URL.createObjectURL(response.data);
        
        setImageUrls((prevUrls) => ({ ...prevUrls, [templeId]: imageUrl }));
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  };

  useEffect(() => {
    // Fetch temple data
    axios.get("http://localhost:8080/temples/get")
      .then((response) => {
        setTemples(response.data);
        // Fetch image for each temple id
        response.data.forEach((temple) => {
          fetchImage(temple.id);
        });
      })
      .catch((error) => {
        console.error('Error fetching temples:', error);
      });
  }, []);


  return (
    <div>
      <div class="famtit"><h3>Famous Temples of TamilNadu</h3></div>

        {famousTemples.length > 0 && (
        <div className="container">
          {famousTemples.map((temple) => {
            const imageUrl = imageUrls[temple.id];

            return (
              <div key={temple.id} className="card">
                <img src={imageUrl} alt="loading" className="img"/>
                <h3 className="tname">{temple.name}</h3>
                <h5 className="taddress">{temple.address}</h5>
                <p className="knw">To know more about...</p>
                <div className="icoclk"><BiIcons.BiRightArrowAlt className="ico"/>
                <a href={temple.link} className="clk">Click Here</a>
                </div>
              </div>
              
            );
          })}
        </div>
      )}
      
      
    </div>
  );
};
 

