import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCallLog, addFavoriteContact } from '../Store/actions/action'; // Import addFavoriteContact
import FooterMenu from './FooterMenu';
import { FaTrash, FaStar } from 'react-icons/fa'; // Importing the trash and star icons

const CallLogScreen = () => {
  const dispatch = useDispatch();
  const callLogs = useSelector((state) => state.callLogs);
  const favorites = useSelector((state) => state.favorites); // Get the list of favorites from the store

  const handleDelete = (id) => {
    dispatch(deleteCallLog(id));
  };

  const handleAddFavorite = (log) => {
    const isAlreadyFavorite = favorites.some(fav => fav.number === log.number); // Check if already favorited
    if (isAlreadyFavorite) {
      alert("Already favorited"); // Show alert if the number is already in favorites
    } else {
      dispatch(addFavoriteContact(log)); // Dispatch the action to add to favorites
    }
  };

  return (
    <div className="call-log-screen">
      <h4>Recents</h4>
      {callLogs.length ? (
        callLogs.map((log) => (
          <div key={log.id} className="call-log-item">
            <span>{log.number}</span> {/* Number on the left */}
            <div className="time-and-delete"> {/* Time, favorite, and delete icons on the right */}
              <span>{log.time}</span>
              <button onClick={() => handleAddFavorite(log)}>
                <FaStar style={{ color: "yellow" }} /> {/* Favorite icon in yellow */}
              </button>
              <button onClick={() => handleDelete(log.id)}>
                <FaTrash /> {/* Trash icon */}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No calls made.</p>
      )}
      <FooterMenu />
    </div>
  );
};

export default CallLogScreen;
