import Card from '../Card/Card';
import './styles.scss';

const CardList = ({ gnomes }) => (
    <ul className='list-container'>
        {gnomes.map(gnome => (
            <li key={gnome.id}>
                <Card {...gnome} />
            </li>
        ))}
    </ul>
);

export default CardList;