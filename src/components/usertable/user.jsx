import React, { useState } from "react";
import "./UserTable.css"; // Add the CSS file for styling

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ column: null, order: "asc" });

  const initialUsers = [
    {
      name: "thunder thunder",
      profilePicture: "default-profile.png",
      role: "Super-Admin",
      level: "welcome-level.png",
    },
    {
      name: "PP360 Admin",
      profilePicture: "profile-360.png",
      role: "Super-Admin",
      level: "level-3.png",
    },
    {
      name: "Samuelwhitelabeltest YEAH",
      profilePicture: "default-profile.png",
      role: "Super-Admin, White Label",
      level: "welcome-level.png",
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  const handleSort = (column) => {
    const newOrder =
      sortConfig.column === column && sortConfig.order === "asc"
        ? "desc"
        : "asc";

    const sortedUsers = [...users].sort((a, b) => {
      if (newOrder === "asc") {
        return a[column].localeCompare(b[column]);
      } else {
        return b[column].localeCompare(a[column]);
      }
    });

    setSortConfig({ column, order: newOrder });
    setUsers(sortedUsers);
  };

  const handleDelete = (userToDelete) => {
    setUsers(users.filter((user) => user !== userToDelete));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="user-table-wrapper">
      <div className="container user-table-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Overview of Users</h2>
          <button className="btn btn-warning">Create Users</button>
          <p className="text-muted">White label instance: 'Personal-Peak-360'</p>
        </div>
        <p className="text-muted">White label instance: 'Personal-Peak-360'</p>

        {/* Entries and Search */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <label htmlFor="entriesSelect" className="form-label me-2">
              Show
            </label>
            <select
              id="entriesSelect"
              className="form-select d-inline-block w-auto"
              onChange={handleEntriesChange}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="ms-2">entries per page</span>
          </div>
          <div>
            <label htmlFor="searchBar" className="form-label me-2">
              Search:
            </label>
            <input
              type="text"
              id="searchBar"
              className="form-control d-inline-block w-auto"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for users..."
            />
          </div>
        </div>

        {/* User Table */}
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center"> {/* Added 'text-center' class */}
            <thead className="table-light">
              <tr>
                <th>
                  Name
                  <span className="sort-icons">
                    <i
                      className="bi bi-caret-up-fill"
                      onClick={() => handleSort("name")}
                    ></i>
                    <i
                      className="bi bi-caret-down-fill"
                      onClick={() => handleSort("name")}
                    ></i>
                  </span>
                </th>
                <th>Profile Picture</th>
                <th>
                  Role
                  <span className="sort-icons">
                    <i
                      className="bi bi-caret-up-fill"
                      onClick={() => handleSort("role")}
                    ></i>
                    <i
                      className="bi bi-caret-down-fill"
                      onClick={() => handleSort("role")}
                    ></i>
                  </span>
                </th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.slice(0, entriesPerPage).map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>
                    <img
                      src={user.profilePicture}
                      className="rounded-circle"
                      alt="Profile"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>{user.role}</td> {/* Role displayed as plain text */}
                  <td>
                    <img
                      src={user.level}
                      alt="Level"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">
                      View Details / Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Prev
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserTable;
