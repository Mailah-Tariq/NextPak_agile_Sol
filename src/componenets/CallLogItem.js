import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCallLog } from '../Store/actions/action';

const CallLogItem = ({ log }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCallLog(log.id));
  };

  return (
    <div className="d-flex justify-content-between align-items-center border p-2 mb-2">
      <span>{log.number}</span>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CallLogItem;