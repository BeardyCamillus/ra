export type Item = {
    state: string,
    quantity: number,
    url: string,
    MainImage: MainImage,
    title: string,
    currency_code: string,
    price: string,
    listing_id: number
}

type MainImage = {
    url_570xN: string
}

type ListItemProps = {
    item: Item
}

const ListItem = ({ item }: ListItemProps) => {
    const {state, quantity, title, currency_code, price, url, MainImage } = item;

    if (state !== 'active') {
        return null;
    }

    const getItemQuantityLevel = (quantity) => {
        if (quantity <= 10) {
            return 'level-low'
        } else if (quantity <= 20) {
            return 'level-medium';
        } else {
            return 'level-high';
        }
    };

    const getCurrencySymbol = (currency_code, price) => {
        if (currency_code === 'USD') {
            return `$${price}`
        } else if (currency_code === 'EUR') {
            return `€${price}`
        } else {
            return `${price} ${currency_code}`
        }
    }

    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title}></img>
                </a>F
            </div>
            <div className='item-details'>
                <p className='item-title'>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
                <p className='item-price'>{getCurrencySymbol(currency_code, price)}</p>
                <p className={getItemQuantityLevel(quantity)}>{quantity} left</p>
            </div>
        </div>
    )
}

export default ListItem