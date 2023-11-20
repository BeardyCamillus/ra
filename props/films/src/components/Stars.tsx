import Star from './Star';

type StarsAmount = {
    count: number
}

const Stars = ({ count = 0 }: StarsAmount) => {
    if (count < 1 || count > 5) return;

    const starsListItems = [];

    for (let i = 1; i <= count; i += 1) {
        starsListItems.push(<li key={i}><Star /></li>);
    }

    return (
        <ul className="card-body-stars">
            {[starsListItems]}
        </ul>
    )
}

export default Stars