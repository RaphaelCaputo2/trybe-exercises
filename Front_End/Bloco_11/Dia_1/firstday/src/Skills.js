import React from 'react'

const skills = ['javascript', 'html', 'css', 'git', 'github'];



class Skills extends React.Component {
render() {
  return (<h1>
    <ul>
    <li>  {skills[0]}</li>
    <li>{skills[1]}</li>
    <li> {skills[2]}</li>
    <li>{skills[3]}</li>
    <li> {skills[4]}</li>
    </ul>
    </h1>)
}
}

export default Skills;