function Sidebar({menuItems = []}) {
    const defaultMenuItems = [
        { label: 'Dashboard', href: '#' },
        { label: 'Profile', href: '#' },
        { label: 'Messages', href: '#' },
        { label: 'Tasks', href: '#' },
        { label: 'Analytics', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Logout', href: '#' }
    ];

    const items = menuItems.length > 0 ? menuItems : defaultMenuItems;

    return (<>
    <aside className="sidebar">
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
    </>)
}

export default Sidebar