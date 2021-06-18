import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios(API);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { products };
};

export default useInitialState;
