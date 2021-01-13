import './styles.scss';

const Card = ({ id, name, thumbnail, age, weight, height, hair_color, professiones, friends }) => {

    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='avatar'>
                    {name && name[0]}
                </div>
                <span className='name'>{name}</span>
            </div>
            <img className='profile-pic' src={thumbnail} alt={name} />


        </div>
    )
};

export default Card;