function StatCard({statItems = []}) {
    const defaultItems = [
        {title: 'Projects',  count: '12'},
        {title: 'Tasks',     count: '48'},
        {title: 'Completed', count: '32'},
        {title: 'Messages',  count: '8'}
    ]

    const items = statItems.length > 0 ? statItems : defaultItems

    return(<>
        {items.map((val, key) => (
            <div className="stat-card" key={key}>
                <h3>{val.title}</h3>
                <p>{val.count}</p>
            </div>
        ))}
    </>)
}

export default StatCard