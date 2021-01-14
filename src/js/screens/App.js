import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../components/CardList/CardList';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import CircularProgress from '@material-ui/core/CircularProgress';
import { filter } from 'lodash';
import '../../stlyes/main.scss';

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const App = () => {
  const [gnomes, setGnomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setGnomes(res.data?.Brastlewark || []);
      setTimeout(() => setIsLoading(false), 300);
    };
    fetchData();
  }, []);

  const searchGnome = () => filter(gnomes, (gnome) => gnome.name.indexOf(searchValue) !== -1);
  const filteredGnomes = searchValue === '' ? gnomes : searchGnome();

  const render = isLoading ? <div data-testid='loading' className='spinner-container'> <CircularProgress size='6rem' /> </div> : <CardList gnomes={filteredGnomes} />

  return (
    <Layout>
      <Header>Citizens of Brastlewark</Header>
      <SearchInput placeholder='Search for any Gnome' handleChange={(event) => { setSearchValue(event.target.value) }} />
      {render}
    </Layout>
  )
}
export default App;
