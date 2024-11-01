// src/components/Contacts.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteContact } from '../Store/actions/action';
import { FaStar } from 'react-icons/fa';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts);
    const favorites = useSelector((state) => state.favorites); // Get current favorites from Redux

    const handleAddFavorite = (contact) => {
        // Check if the contact is already in the favorites
        const isAlreadyFavorite = favorites.some(fav => fav.number === contact.number);
        if (isAlreadyFavorite) {
            alert("Number is already saved in favorites"); // Alert if contact is already favorited
        } else {
            dispatch(addFavoriteContact(contact)); // Add to favorites if not already present
        }
    };

    return (
        <div className="contacts-screen">
            <h3>Contacts</h3>
            {contacts.length > 0 ? (
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index} className="contact-item">
                            <span className="contact-name">{contact.name}</span>
                            <span className="contact-number">{contact.number}</span>
                            <button
                                className="favorite-button"
                                onClick={() => handleAddFavorite(contact)}
                            >
                                <FaStar style={{ color: '#FFD700' }} /> {/* Yellow star icon */}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts saved.</p>
            )}
        </div>
    );
};

export default Contacts;
