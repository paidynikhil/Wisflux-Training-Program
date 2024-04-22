import React, { useEffect } from 'react'
import Title from "./components/Title"
import Content from "./components/Content"

function App() {
    useEffect((): void => {
        document.title = "Git Peek - Check out GitHub Users"
    }, [])
	
	
	return (
		<>
			<Title />
			<Content />
		</>
	)
}

export default App
