import React, { useState, useEffect } from "react";

const AddTaskModal = ({ onClose, taskToEdit, onSave }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    dueDate: "",
    priority: "",
    project: "",
    comments: 0,
    description: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit); // Populate fields with taskToEdit details if editing
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(task); // Pass updated task to the parent
    onClose(); // Close modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h5>{taskToEdit ? "Edit Task" : "Add Task"}</h5>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        ></textarea>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
