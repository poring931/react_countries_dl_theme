import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useHistory, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
// import { Info } from '../components/Info';

const Details = () => {

  const { name } = useParams();

  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
    <Button  onClick={() => navigate(-1)}>    
      <IoArrowBack />  go back
    </Button>
      {country && <Info  {...country} />}
    </div>
  );
};


export default Details
