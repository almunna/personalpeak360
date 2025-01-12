const TaskDetailModal = ({ task, onClose }) => (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{task.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Priority:</strong>{" "}
              <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
            </p>
            <p>
              <strong>Project:</strong> {task.project}
            </p>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default TaskDetailModal;
  