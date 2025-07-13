  import React from 'react'
  import { Particle } from 'jparticles'

  class Example extends React.Component {
    componentDidMount() {
      new Particle('#demo', {
    color: ['#7FFF00', '#00FF00', '#00FF7F'],
    lineShape: 'cube',
    range: 2000,
    proximity: 100,
    parallax: true,
    opacity: 0.5
})
    }

    render() {
      return <div id="demo" style={{ width: '100%', height: '100%', backgroundColor: '#000' }}></div>
    }
  }

  export default Example