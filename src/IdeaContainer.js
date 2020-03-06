import React from 'react'
import IdeaCard from './IdeaCard'
import './IdeaContainer.css'

const IdeaContainer = ({ ideas, deleteIdea }) => {
  const listOfIdeas = ideas.map(idea => <IdeaCard idea={idea} deleteIdea={deleteIdea}/>)

  return (
    <section className='list'>
      {listOfIdeas}
    </section>
  )
}

export default IdeaContainer