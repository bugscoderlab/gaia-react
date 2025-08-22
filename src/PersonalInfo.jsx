function PersonalInfo() {
    const currentDateTime = new Date().toLocaleString();

    return (<>
        <h1>Nama aku</h1>
        <p>ini react</p>
        <p>Current date and time: {currentDateTime}</p>
        <img 
            src="https://picsum.photos/300/200" 
            alt="Random image"
            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
        />
        <p>my hobbies are:</p>
        <ul>
            <li>main</li>
            <li>makan</li>
            <li>minum</li>
        </ul>
    </>)
}

export default PersonalInfo;