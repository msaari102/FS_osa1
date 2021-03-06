import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const copy  = () => {
    var t = []
    var i = 0
    points.forEach(value => {
      if (i==selected) {
        t = t.concat(value+1);
       } else {
        t = t.concat(value);
       }
       i++;
    })
    return t;
    } 

    const most  = () => {
      var t = 0
      var i = 0
      points.forEach(value => {
        if (value>points[t]) {
          t = i
         }
         i++;
      })
      return t;
      }     

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>
      <Button handleClick={() => setPoints(copy)} text="Vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next anecdote"/>
      <h2> Anecdote with most votes</h2>
      <p>{anecdotes[most()]}</p>
      <p> has {points[most()]} votes</p>
    </div>
  )
}

export default App