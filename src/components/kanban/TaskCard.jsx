import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"; // Assuming you're using Bootstrap

const TaskCard = ({ task, onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="text-muted mb-1">
              <small>{task.dueDate}</small>
            </p>
            <h5>{task.title}</h5>
            <p className="text-muted">
              <small>{task.project} • {task.comments} Comments</small>
            </p>
          </div>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
              <i className="bi bi-three-dots" style={{ cursor: "pointer" }}></i>
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem onClick={() => onEdit(task)}>Edit</DropdownItem>
              <DropdownItem onClick={() => onDelete(task)}>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="mt-3">
          <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
