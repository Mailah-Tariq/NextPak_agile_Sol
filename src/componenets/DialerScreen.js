import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDigit, deleteLastDigit, addToCallLogs, saveContact } from '../Store/actions/action';
import DialButton from './DialButton';
import FooterMenu from './FooterMenu';
import { useNavigate } from 'react-router-dom';

const DialerScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dialedNumber = useSelector((state) => state.dialedNumber);
    const [showPrompt, setShowPrompt] = useState(false);
    const [contactName, setContactName] = useState("");
    const [showErrorPrompt, setShowErrorPrompt] = useState(false);

    const handleDial = (digit) => {
        dispatch(addDigit(digit));
    };

    const handleClear = () => {
        dispatch(deleteLastDigit());
    };

    const handleCall = () => {
        if (dialedNumber.length === 11) {
            dispatch(addToCallLogs(dialedNumber)); 
            navigate('/dialed-number'); 
            console.log("11 digits");
        } else {
            setShowErrorPrompt(true); // Show error prompt if number is less than 11 digits
        }
    };

    const handleAddNumber = () => {
        setShowPrompt(true); 
    };

    const handleSaveContact = () => {
        if (contactName.trim() && dialedNumber.length === 11) {
            dispatch(saveContact({ name: contactName, number: dialedNumber }));
            setShowPrompt(false);
            setContactName(""); 
            alert("Contact saved!");
        } else {
            alert("Please enter a valid name and a valid 11-digit number.");
        }
    };

    return (
        <div className="dialer-screen">
            <h2 className="dialed-number">{dialedNumber || 'Add Number'}</h2>
            <button className="add-number-button" onClick={handleAddNumber}>Add Contact</button>
            <div className="dial-pad">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
                    <DialButton key={digit} digit={digit} onClick={handleDial} />
                ))}
            </div>
            <div className="action-buttons">
                <button
                    className="call-button"
                    onClick={handleCall}
                >
                    📞
                </button>
                <button className="delete-button" onClick={handleClear}>X</button>
            </div>

            {/* Prompt for adding contact name */}
            {showPrompt && (
                <div className="prompt-overlay">
                    <div className="prompt-box">
                        <h3>Add Contact</h3>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                        <button onClick={handleSaveContact}>Save</button>
                        <button onClick={() => setShowPrompt(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Error prompt for invalid number */}
            {showErrorPrompt && (
                <div className="prompt-overlay">
                    <div className="prompt-box">
                        <h3>Error</h3>
                        <p>Please enter a valid 11-digit number.</p>
                        <button onClick={() => setShowErrorPrompt(false)}>Close</button>
                    </div>
                </div>
            )}

            <FooterMenu />
        </div>
    );
};

export default DialerScreen;
