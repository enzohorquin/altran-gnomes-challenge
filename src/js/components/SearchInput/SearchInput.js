import './styles.scss';

const SearchInput = ({ handleChange, placeholder }) => (
    <input
        className="input"
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
    />
);

export default SearchInput;