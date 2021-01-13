import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../stlyes/main.scss';
import Card from '../components/Card/Card';

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const App = () => {
  const [gnomes, setGnomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setGnomes(res.data?.Brastlewark || []);
    };
    fetchData();
  }, []);
  return <Card name={gnomes[0]?.name} thumbnail={gnomes[0]?.thumbnail} />
}
export default App;
