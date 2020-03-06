import React, {useState} from 'react'

const Form = () => {
  const [idea, setIdea] = useState('')

  return (
    <form>
      <input placeholder='Idea..'/>
      <button type='submit'>Submit Idea</button>
    </form>
  )
}

export default Form