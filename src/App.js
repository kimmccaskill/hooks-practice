import React,{ useState } from 'react';
import Form from './Form'
import IdeasContainer from './IdeaContainer'
import './App.css';

function App() {
  const [ideas, setIdeas] = useState({ideas: []});

  const saveIdea = (idea) => {
    setIdeas({ideas: [...ideas.ideas, idea]})
  }

  return (
    <main className="App">
      <h1>Ideabox using React Hooks</h1>
      <Form saveIdea={saveIdea}/>
      <IdeasContainer ideas={ideas.ideas} />
    </main>
  );
}

export default App;
