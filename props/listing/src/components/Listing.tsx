import ListItem, { Item } from "./ListItem";

type ListingProps = {
    items: Item[]
}

const Listing = ({ items }: ListingProps) => {
    return (
        <ul className='item-list'>
            {items.map((item: Item) => <ListItem key={item.listing_id} item={item} />)}
        </ul>
    )
}

export default Listing;