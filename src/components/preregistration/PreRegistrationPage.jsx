import React, { useState } from "react";
import "./PreRegistrationPage.css";

const PreRegistrationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    {
      firstName: "Anja",
      lastName: "Keßeler",
      email: "anja.kesseler@web.de",
      phoneNumber: "01741615110",
      date: "October 24, 2024 at 10:43 p.m.",
      activationCode: "Samuel",
    },
    {
      firstName: "Ingrid",
      lastName: "Simon",
      email: "simon-koblenz@t-online.de",
      phoneNumber: "01787375366",
      date: "November 25, 2024 at 3:44 p.m.",
      activationCode: "Not specified",
    },
    {
      firstName: "Michael",
      lastName: "horn",
      email: "m.horn@planet-horn.de",
      phoneNumber: "01728416124",
      date: "November 12, 2024 at 11:41 a.m.",
      activationCode: "Not specified",
    },
    // Add more data here
  ];

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  return (
    <div className="preregistration-container">
      <h2>Overview of pre-registrations</h2>
      <p className="text-muted">White label instance: 'Personal-Peak-360'</p>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <label htmlFor="entriesSelect" className="me-2">
            Show
          </label>
          <select
            id="entriesSelect"
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="form-select d-inline-block w-auto"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="ms-2">entries per page</span>
        </div>
        <div>
          <label htmlFor="searchBar" className="me-2">
            Search:
          </label>
          <input
            type="text"
            id="searchBar"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control d-inline-block w-auto"
          />
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>e-mail</th>
            <th>phone number</th>
            <th>Date</th>
            <th>activation code</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, entriesPerPage).map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.date}</td>
              <td>{item.activationCode}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  View Details
                </button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
              2
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
  );
};

export default PreRegistrationPage;
