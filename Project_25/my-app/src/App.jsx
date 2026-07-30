//Project 25 - Selecting from a List

import { useState } from 'react';

const initialItems = [
  { title: 'Dosa', id: 0 },
  { title: 'Sandwich', id: 1 },
  { title: 'pani puri', id: 2 },
];

export default function Menu() {
  const [items] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <>
      <h2>What's your favurite food?</h2>
      <ul>
        {items.map(item => ( //items.map() is used to iterate over the items array and return a new array of JSX elements
          <li key={item.id}> {/*item.id is used as the key prop to help React identify which items have changed, are added, or are removed*/}
            {item.title}  {/*item.title is used to display the title of the item*/}
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

