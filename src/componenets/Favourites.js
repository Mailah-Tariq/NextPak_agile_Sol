// src/components/Favorites.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteContact } from '../Store/actions/action'; // Import the new action
import { FaStar } from 'react-icons/fa'; // Import the star icon for unfavoriting

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites); // Get the favorites from the Redux store

    const handleRemoveFavorite = (contact) => {
        dispatch(removeFavoriteContact(contact)); // Dispatch action to remove from favorites
    };

    return (
        <div className="favorites-screen">
            <h3>Favorites</h3>
            {favorites.length > 0 ? (
                <ul className="favorite-list">
                    {favorites.map((contact, index) => (
                        <li key={index} className="favorite-item">
                            <span className="contact-name">{contact.name}</span>
                            <span className="contact-number">{contact.number}</span>
                            <button onClick={() => handleRemoveFavorite(contact)}>
                                <FaStar style={{ color: '#FFD700' }} /> {/* Unfavorite icon */}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorite contacts.</p>
            )}
        </div>
    );
};

export default Favorites;
