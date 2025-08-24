function Content() {
    return (<>
    <main>
        <h2>User Statistics</h2>
        <div className="stats-container">
            <div className="stat-card">
                <h3>Projects</h3>
                <p>12</p>
            </div>
            <div className="stat-card">
                <h3>Tasks</h3>
                <p>48</p>
            </div>
            <div className="stat-card">
                <h3>Completed</h3>
                <p>32</p>
            </div>
            <div className="stat-card">
                <h3>Messages</h3>
                <p>8</p>
            </div>
        </div>

        <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-item">
                <p><strong>Project Alpha</strong> - Task completed</p>
                <small>Today, 10:30 AM</small>
            </div>
            <div className="activity-item">
                <p><strong>Team Meeting</strong> - Notes added</p>
                <small>Yesterday, 2:15 PM</small>
            </div>
            <div className="activity-item">
                <p><strong>Project Beta</strong> - New task assigned</p>
                <small>Yesterday, 11:45 AM</small>
            </div>
            <div className="activity-item">
                <p><strong>Client Review</strong> - Feedback received</p>
                <small>Aug 15, 2023, 4:20 PM</small>
            </div>
        </div>
    </main>
    </>)
}

export default Content