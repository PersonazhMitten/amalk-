import React, { useState, useEffect, useCallback } from 'react'
import './gameRating.css'

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateStars = useCallback(() => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return stars;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  }, [rating]); // Memoize the function with useCallback, depend on rating

  useEffect(() => {
    const stars = generateStars();
    setStars(stars);
  }, [rating, generateStars]); // Include generateStars in the dependency array

  return (
    <div className='gameRating'>
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  )
}

export default GameRating
