import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Blog from './components/Blog';
import TAResources from './components/TAResources';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'research':
                return <Research />;
            case 'blog':
                return <Blog />;
            case 'ta-resources':
                return <TAResources />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    // This hook updates the page title in the browser tab when the activeSection state changes.
    useEffect(() => {
        if (activeSection === 'home') {
            document.title = 'Om Karthik Reddy - Portfolio';
        } else {
            // Capitalizes the first letter of the section name for the title
            const title = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
            document.title = `Om Karthik Reddy - ${title}`;
        }
    }, [activeSection]);

    // This hook scrolls the page to the top whenever the section changes.
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    return (
        <div className="App">
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main>
                {renderSection()}
            </main>
        </div>
    );
}

export default App;