import React, { useState } from 'react'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  if ((good+bad+neutral) === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      <tr><StatisticLine text="good" value ={good} /></tr>
      <tr><StatisticLine text="neutral" value ={neutral} /></tr>
      <tr><StatisticLine text="bad" value ={bad} /></tr>
      <tr><StatisticLine text="all" value ={good+neutral+bad} /></tr>
      <tr><StatisticLine text="average" value ={(good-bad)/(good+neutral+bad)} /></tr>
      <tr><StatisticLine text="positive" value ={(100*good)/(good+neutral+bad)} /></tr>
      </tbody>
    </table>
  )
}

const StatisticLine  = (props) => {
  const text = props.text
  const value = props.value
  if (text=="positive"){
    return (
      <>
        <td>{text}</td> 
        <td> {value}%</td>
      </>
    )
  }
  return (
    <>
    <td>{text}</td> 
    <td>{value}</td>
    </>
  )
  }

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App