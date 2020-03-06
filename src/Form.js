import React, {useState, useEffect} from 'react'

const Form = ({ saveIdea }) => {
  const [input, setInput] = useState({id: Date.now(), title: '', description: ''})

  const handleChange = e => {
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }

  const submitIdea = e => {
    e.preventDefault();
    saveIdea(input)
    setInput({id: Date.now(), title: '', description: ''});
  }

  return (
    <form>
      <input name='title' onChange={handleChange} value={input.title} placeholder='Title..'/>
      <input name='description' onChange={handleChange} value={input.description} placeholder='Description..'/>
      <button type='submit' onClick={submitIdea}>Submit Idea</button>
    </form>
  )
}

export default Form