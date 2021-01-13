import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../components/CardList/CardList';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import { filter } from 'lodash';

import '../../stlyes/main.scss';

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const App = () => {
  const [gnomes, setGnomes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setGnomes(res.data?.Brastlewark || []);
    };
    fetchData();
  }, []);

  const searchGnome = () => filter(gnomes, (gnome) => gnome.name.indexOf(searchValue) !== -1);

  const filteredGnomes = searchValue === '' ? gnomes : searchGnome();

  return (
    <Layout>
      <Header>Citizens of Brastlewark</Header>
      <SearchInput placeholder='Search for any Gnome' handleChange={(event) => { setSearchValue(event.target.value) }} />
      <CardList gnomes={filteredGnomes} />
    </Layout>
  )
}
export default App;
