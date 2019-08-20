import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface IchecklistItem {
  id: string
  title: string
  completed: boolean
}

interface ChecklistItemProps {
  checklistItem: IchecklistItem
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDeleteChecklistItem: (checklistItemId: string) => void
  handleUpdateChecklistItem: (checklistItemId: string, checklistItemTitle: string) => void
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  checklistItem,
  handleChecked,
  handleDeleteChecklistItem,
  handleUpdateChecklistItem,
}) => {
  const [checklistTitleInput, setChecklistTitleInput] = useState('');
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleUpdateButton = () => {
    handleUpdateChecklistItem(checklistItem.id, checklistTitleInput);
    handleEditing();
    setChecklistTitleInput('');
  };

  const handleDeleteButton = () => {
    handleDeleteChecklistItem(checklistItem.id);
    handleEditing();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecklistTitleInput(e.target.value);
  };

  return (
    <div>
      {editing
        ? (
          <div>
            <input type="text" value={checklistTitleInput} onChange={handleChange} placeholder={checklistItem.title} />
            <button type="button" onClick={() => handleUpdateButton()}>Save Changes</button>
            <button type="button" onClick={() => handleEditing()}>Cancel</button>
            <button type="button" onClick={() => handleDeleteButton()}><span>x</span></button>
          </div>
        )
        : (
          <div>
            <input type="checkbox" id={checklistItem.id} checked={checklistItem.completed} onChange={handleChecked} />
            <label htmlFor={checklistItem.id} onClick={handleEditing}>{checklistItem.title}</label>
          </div>
        )}
    </div>
  );
};

ChecklistItem.propTypes = {
  checklistItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChecked: PropTypes.func.isRequired,
  handleDeleteChecklistItem: PropTypes.func.isRequired,
  handleUpdateChecklistItem: PropTypes.func.isRequired,

};
export default ChecklistItem;
