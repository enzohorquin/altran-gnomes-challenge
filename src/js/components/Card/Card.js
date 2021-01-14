import './styles.scss';

const Card = ({ id, name, thumbnail, age, weight, height, hair_color, professions, friends }) => {

    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='avatar'>
                    {name && name[0]}
                </div>
                <span className='name'>{name}</span>
            </div>
            <img className='profile-pic' src={thumbnail} alt={name} />
            <div className='card-description-container'>
                <div className='card-description'>
                    <span className='attributes'>Age: {age}</span>
                    <span className='attributes'>Weight: {weight.toFixed(0)}</span>
                    <span className='attributes'>Height: {height.toFixed(0)}</span>
                </div>
                <div className='hair-color-container'>
                    <span className='attributes'>Hair Color</span>
                    <div className='hair-color' style={{ backgroundColor: hair_color.toLowerCase() }}></div>
                </div>

                <span className='attributes'>Professions: {professions.join(', ')}</span>
                <span className='attributes'>Friends: {friends.join(', ')}</span>
            </div>
        </div>
    )
};

export default Card;