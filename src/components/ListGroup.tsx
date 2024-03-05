import {useState} from 'react'
import { MouseEvent } from 'react';

interface ListGroupProps { 
    items: string[], 
    heading: string,
    onSelectItem(item: string): void
};
function ListGroup({heading, items, onSelectItem}: ListGroupProps) {
    // const items = ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                    key={item} 
                    onClick={() => {
                        setSelectedIndex(index)
                        onSelectItem(item)
                    }
    
                    }>{item}</li>
            ))}
        </ul>
    </> 
  )
}

export default ListGroup
