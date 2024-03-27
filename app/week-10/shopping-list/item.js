export default function Item({name, quantity, category, onSelect}) {
    return (
        <div onClick={() => onSelect()} >
            <h2>{name}</h2>
            <p>Buy <span>{quantity}</span> in {category}</p> 
        </div>
    );
}