function RecentActivityItems({recentActivityItems = []}) {
    const defaultRecentActivityItems = [
        {
            "title":  "Project Alpha", 
            "status": "Task completed", 
            "time":   "Today, 10:30 AM"
        },
        {
            "title":  "Team Meeting", 
            "status": "Notes added", 
            "time":   "Yesterday, 2:15 PM"
        },
        {
            "title":  "Project Beta", 
            "status": "New task assigned", 
            "time":   "Yesterday, 11:45 AM"
        },
        {
            "title":  "Client Review", 
            "status": "Feedback received", 
            "time":   "Aug 15, 2023, 4:20 PM"
        },
    ]

    const items = recentActivityItems.length > 0 ? recentActivityItems : defaultRecentActivityItems;

    return (<>
        {items.map((val, key) => (
            <div className="activity-item" key={key}>
                <p><strong>{val.title}</strong> - {val.status}</p>
                <small>{val.time}</small>
            </div>
        ))}
    </>);
}

export default RecentActivityItems