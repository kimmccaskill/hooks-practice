import React from 'react'
import IdeaCard from './IdeaCard'
import './IdeaContainer.css'

const IdeaContainer = ({ ideas }) => {
  const listOfIdeas = ideas.map(idea => <IdeaCard idea={idea}/>)

  return (
    <section className='list'>
      {listOfIdeas}
    </section>
  )
}

export default IdeaContainer