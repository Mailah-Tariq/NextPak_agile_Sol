// src/components/DialedNumberScreen.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaVolumeUp, FaVideo, FaMicrophoneSlash, FaPlus, FaKeyboard } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';

const DialedNumberScreen = () => {
    const dialedNumber = useSelector((state) => state.dialedNumber);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/recents');
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="dialed-number-screen">
            <div className="call-header">
                <span>Calling mobile...</span>
                <h2>{dialedNumber || "No Number Dialed"}</h2>
            </div>
            <div className="action-buttons-grid">
                <button className="call-action-button">
                    <FaVolumeUp size={24} /> <span>Speaker</span>
                </button>
                <button className="call-action-button">
                    <FaVideo size={24} /> <span>FaceTime</span>
                </button>
                <button className="call-action-button">
                    <FaMicrophoneSlash size={24} /> <span>Mute</span>
                </button>
                <button className="call-action-button">
                    <FaPlus size={24} /> <span>Add</span>
                </button>
                <button onClick={() => navigate('/recents')} className="end-call-button">
                    <MdCallEnd size={24} /> <span>End</span>
                </button>
                <button className="call-action-button">
                    <FaKeyboard size={24} /> <span>Keypad</span>
                </button>
            </div>
        </div>
    );
};

export default DialedNumberScreen;
