import React from 'react';
import './homepage.css';

const Dashboard = () => {
  return (
    <div className="container">
      {/* Nutzer-Ranking */}
      <div className="section ranking">
        <h2>Nutzer-Ranking</h2>
        <div className="ranking-item">
          <img src="https://via.placeholder.com/60" alt="Avatar" />
          <div className="details">
            <strong>PP360 Admin</strong><br />
            Punkte: <span className="points">1051</span>
          </div>
          <span>🏆 Platz 1</span>
        </div>
        <div className="ranking-item">
          <img src="https://via.placeholder.com/60" alt="Avatar" />
          <div className="details">
            <strong>Lukas Wärner</strong><br />
            Punkte: <span className="points">3</span>
          </div>
          <span>🥈 Platz 2</span>
        </div>
      </div>

      {/* Video */}
      <div className="section video">
        <h2>Ihr persönliches Dashboard-Video</h2>
        <iframe
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          title="Dashboard Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Challenges */}
      <div className="section challenges">
        <h2>Challenges</h2>
        <div className="challenge-item">
          <span>Testchallenge: Hanteln bestellen</span>
          <button onClick={() => window.open('https://www.amazon.de')}>Jetzt starten</button>
        </div>
        <div className="challenge-item">
          <span>Weekly Challenge: 5x Laufen</span>
          <button>Mehr erfahren</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
