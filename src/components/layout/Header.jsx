function Header({name}) {
    return(<>
        <header>
            <h1>Dashboard</h1>
            <div className="user-info">
                <span>Welcome, <strong>{name}</strong></span>
            </div>
        </header>
    </>)
}

export default Header