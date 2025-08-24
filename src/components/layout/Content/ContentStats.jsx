import StatCard from "./StatCard"

const statCardItems = [
    {title: 'Projects',  count: '30'},
    {title: 'Tasks',     count: '48'},
    {title: 'Completed', count: '32'},
    {title: 'Messages',  count: '8'}
]

function ContentStats() {
    return (<>
        <h2>User Statistics</h2>
        <div className="stats-container">
            <StatCard statItems={statCardItems}/>
        </div>
    </>)
}

export default ContentStats