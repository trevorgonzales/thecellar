function WineCard(props) {
    return (
        <div>
            <p>{props.type}</p>
            <p>{props.brand}</p>
            <p>{props.color}</p>
            <p>{props.year}</p>
            <p>{props.favorite}</p>
            <p>{props.rating}</p>
        </div>
    );
}

export default WineCard;