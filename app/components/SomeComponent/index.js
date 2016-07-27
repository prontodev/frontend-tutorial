import React from 'react'
import * as d3 from 'd3'
import Faux from 'react-faux-dom'

const SomeComponent = React.createClass({
  mixins: [Faux.mixins.core, Faux.mixins.anim],
  getInitialState: () => ({}),
  componentDidMount() {
    const faux = this.connectFauxDOM('div', 'chart')
    const data = [1, 2, 3]

    d3.select(faux)
      .selectAll('div')
        .data(data)
      .enter()
        .append('div')
        .style('width', d => `${d * 10}px`)
        .style('background', 'red')
        .style('text-align', 'right')
        .text(d => d);
  },
  render() {
    return (
      <div>
        <h2>Some Component</h2>
        {this.state.chart}
      </div>
    )
  },
})

export default SomeComponent
