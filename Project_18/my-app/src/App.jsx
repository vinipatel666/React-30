// Project 18 - Controlled Checkbox Component with State Management


import { useState } from 'react'
import './App.css'

export default function MyCheckbox() {
  const [liked, setLiked] = useState(null);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}