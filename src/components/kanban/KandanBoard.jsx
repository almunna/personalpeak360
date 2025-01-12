import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskDetailModal from "./TaskDetailModal";
import "./KanbanBoard.css";
import { Link } from "react-router-dom";



const KanbanBoard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [taskSections, setTaskSections] = useState([
    {
      id: "todo",
      title: "TODO (5)",
      tasks: [
        {
          id: "task-1",
          title: "iOS App home page",
          dueDate: "18 Jul 2023",
          priority: "High",
          priorityClass: "bg-danger",
          project: "iOS",
          comments: 74,
          description: "The home page for the iOS app requires a responsive design overhaul.",
          dropdown: "dot",
        },
        {
          id: "task-2",
          title: "Topnav layout design",
          dueDate: "15 Dec 2023",
          priority: "Medium",
          priorityClass: "bg-warning",
          project: "Jidox",
          comments: 28,
          description: "Update the top navigation layout for improved user experience.",
          dropdown: "dot",
        },
        {
          id: "task-7",
          title: "Backend API optimization",
          dueDate: "20 Feb 2024",
          priority: "High",
          priorityClass: "bg-danger",
          project: "CRM",
          comments: 32,
          description: "Optimize backend APIs for better performance and scalability.",
          dropdown: "dot",
        },
        {
          id: "task-8",
          title: "Create test cases",
          dueDate: "10 Mar 2024",
          priority: "Low",
          priorityClass: "bg-success",
          project: "Jidox",
          comments: 12,
          description: "Write unit tests for the new features added last sprint.",
          dropdown: "dot",
        },
      ],
    },
    {
      id: "in-progress",
      title: "IN PROGRESS (2)",
      tasks: [
        {
          id: "task-3",
          title: "Write a release note",
          dueDate: "22 Jun 2023",
          priority: "Medium",
          priorityClass: "bg-warning",
          project: "Jidox",
          comments: 17,
          description: "Finalize the release note for the new update.",
          dropdown: "dot",
        },
        {
          id: "task-4",
          title: "Enable analytics tracking",
          dueDate: "19 Jun 2023",
          priority: "Low",
          priorityClass: "bg-success",
          project: "CRM",
          comments: 48,
          description: "Enable analytics tracking on the dashboard.",
          dropdown: "dot",
        },
      ],
    },
    {
      id: "review",
      title: "REVIEW (4)",
      tasks: [
        {
          id: "task-5",
          title: "Kanban board design",
          dueDate: "2 May 2023",
          priority: "High",
          priorityClass: "bg-danger",
          project: "CRM",
          comments: 65,
          description: "Review the design of the Kanban board layout.",
          dropdown: "dot",
        },
      ],
    },
    {
      id: "done",
      title: "DONE (1)",
      tasks: [
        {
          id: "task-6",
          title: "Dashboard design",
          dueDate: "16 Jul 2023",
          priority: "Low",
          priorityClass: "bg-success",
          project: "Jidox",
          comments: 287,
          description: "The dashboard design is complete.",
          dropdown: "dot",
        },
      ],
    },
  ]);
  

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);
  const handleOpenTaskDetailModal = (task) => setSelectedTask(task);
  const handleCloseTaskDetailModal = () => setSelectedTask(null);

  const handleSaveTask = (updatedTask) => {
    if (selectedTask) {
      // Editing an existing task
      const updatedSections = taskSections.map((section) => {
        if (section.tasks.some((t) => t.id === updatedTask.id)) {
          return {
            ...section,
            tasks: section.tasks.map((t) =>
              t.id === updatedTask.id ? updatedTask : t
            ),
          };
        }
        return section;
      });
      setTaskSections(updatedSections);
    } else {
      // Adding a new task
      const newTask = { ...updatedTask, id: `task-${Date.now()}` }; // Assign unique ID
      const updatedSections = [...taskSections];
      updatedSections[0].tasks.push(newTask); // Add to TODO section
      setTaskSections(updatedSections);
    }
    setSelectedTask(null);
  };
  
  const handleDeleteTask = (task) => {
    // Find the section containing the task
    const sectionIndex = taskSections.findIndex((section) =>
      section.tasks.some((t) => t.id === task.id)
    );
  
    if (sectionIndex !== -1) {
      // Remove the task from the section
      const updatedSections = [...taskSections];
      updatedSections[sectionIndex].tasks = updatedSections[
        sectionIndex
      ].tasks.filter((t) => t.id !== task.id);
  
      // Update the state
      setTaskSections(updatedSections);
    }
  };
    

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside any list
    if (!destination) return;

    // If the item is dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Get source and destination sections
    const sourceSection = taskSections.find(
      (section) => section.id === source.droppableId
    );
    const destinationSection = taskSections.find(
      (section) => section.id === destination.droppableId
    );

    // Get the task being moved
    const [movedTask] = sourceSection.tasks.splice(source.index, 1);

    // Move the task to the destination section
    destinationSection.tasks.splice(destination.index, 0, movedTask);

    // Update state with the new task sections
    setTaskSections([...taskSections]);
  };

  return (
    <div className="container-fluid px-0"> {/* Use container-fluid to span the full width */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-start align-items-center">
          <h4 className="page-title">Kanban Board</h4>
          <button className="btn btn-success" onClick={handleOpenAddModal}>
            Add New
          </button>
        </div>
      </div>
      <div className="kanban-board">
  {taskSections.map((section) => (
    <div key={section.id} className="kanban-column">
      <h5 className="task-section-title">{section.title}</h5>
      {section.tasks.map((task) => (
        <div key={task.id} className="card mb-3">
          <div className="card-body">
            <span className={`badge ${task.priorityClass} float-end`}>
              {task.priority}
            </span>
            <div className="dropdown position-absolute dropdown-lower-right">
              <button
                className="btn btn-sm btn-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i>
              </button>
              <ul className="dropdown-menu">

                  <button
                    className="dropdown-item text-danger"
                    onClick={() => handleDeleteTask(task)}
                  >
                    Delete
                  </button>
                
              </ul>
            </div>
            <div onClick={() => handleOpenTaskDetailModal(task)}>
              <h5>{task.title}</h5>
            </div>
            <p className="text-muted">
              <small>Due: {task.dueDate}</small>
            </p>
            <p>
              <small>
                {task.comments} comments • {task.project}
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

      {isAddModalOpen && (
  <AddTaskModal
    onClose={handleCloseAddModal}
    taskToEdit={selectedTask}
    onSave={handleSaveTask}
  />
)}
      {selectedTask && (
        <TaskDetailModal task={selectedTask} onClose={handleCloseTaskDetailModal} />
      )}
    </div>
  );
  
}  

export default KanbanBoard;
