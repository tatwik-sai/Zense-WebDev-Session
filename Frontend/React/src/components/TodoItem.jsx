import { motion } from 'framer-motion';
import { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <motion.div
      className="todo-item"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      whileHover={{ scale: 1.01 }}
      layout
    >
      <motion.input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        whileTap={{ scale: 0.9 }}
        className="todo-checkbox"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
            if (e.key === 'Escape') handleCancel();
          }}
          className="todo-edit-input"
          autoFocus
        />
      ) : (
        <motion.label
          className={`todo-label ${todo.completed ? 'completed' : ''}`}
          animate={{ opacity: todo.completed ? 0.5 : 1 }}
        >
          {todo.text}
        </motion.label>
      )}

      <div className="todo-actions">
        {isEditing ? (
          <>
            <motion.button
              onClick={handleEdit}
              className="btn-save"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save
            </motion.button>
            <motion.button
              onClick={handleCancel}
              className="btn-cancel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              onClick={() => setIsEditing(true)}
              className="btn-edit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Edit
            </motion.button>
            <motion.button
              onClick={() => onDelete(todo.id)}
              className="btn-delete"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Delete
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TodoItem;
