import axios from "axios";
import { useState,useEffect } from "react";
import "./search.css"
import * as BiIcons from "react-icons/bi";
const SearchPage = () => {
  const [temples, setTemples] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuery1, setSearchQuery1] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  const [showNoResultsMessage1, setShowNoResultsMessage1] = useState(false);
  const [imageUrls, setImageUrls] = useState({});

  


  const fetchTemples = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/temples/getbyname?name=${query}`);
      console.log(response.data);
      setTemples(response.data);
    } catch (error) {
      console.error('Error fetching temples:', error);
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/temples/suggestions?name=${query}`);
      console.log(response.data);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery1('')
    setSearchQuery(query);
    fetchSuggestions(query);
  };
  const handleSearchChange1 = (e) => {
    const query = e.target.value;
    setSearchQuery('')
    setSearchQuery1(query);
    
  };

  const handleEnterPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(`http://localhost:8080/temples/getbyname?name=${searchQuery}`);
        setTemples(response.data);
        setShowNoResultsMessage(response.data.length === 0);
        setSuggestions([]); 
      } catch (error) {
        console.error("Error fetching temples:", error);
        setTemples([]); // Set temples to an empty array if an error occurs
        setShowNoResultsMessage(true); // Show the "No temples found" message
      }
    }
  };
  const handleEnterPress1 = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(`http://localhost:8080/temples/getbyaddress?keyword=${searchQuery1}`);
        setTemples(response.data);
        setShowNoResultsMessage1(response.data.length === 0);
        setSuggestions([]); 
      } catch (error) {
        console.error("Error fetching temples:", error);
        setTemples([]); // Set temples to an empty array if an error occurs
        setShowNoResultsMessage1(true); // Show the "No temples found" message
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    fetchTemples(suggestion);
    setSuggestions([]);
  };

  

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
      <div className="div">
        <div>
          <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleEnterPress}
          placeholder="Search by name"
        />
        {suggestions.length > 0 && (
          <div className="suggestions-container">
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li id="li"
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={index < 3 ? 'visible' : ''}
              >
                {suggestion}
              </li>
            ))}
          </ul>
          </div>
        )}
        </div>
        <div>
        <input
          type="text"
          value={searchQuery1}
          onChange={handleSearchChange1}
          onKeyDown={handleEnterPress1}
          placeholder="Search by district"
        />
        </div>
      </div>
      {temples.length > 0 && (
        <div className="container">
          {temples.map((temple) => {
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
      {showNoResultsMessage && temples.length === 0 && <div className="notemp">No temples found.</div>}
      {showNoResultsMessage1 && temples.length === 0 && <div className="notemp">No temples found in this district.</div>}
    </div>
  );
   
};

export default SearchPage;
