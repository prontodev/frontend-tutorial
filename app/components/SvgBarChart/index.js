import React from 'react'
import * as d3 from 'd3'
import Faux from 'react-faux-dom'
import styles from './styles.scss'

const SvgBarChart = React.createClass({
  mixins: [Faux.mixins.core, Faux.mixins.anim],
  getInitialState: () => ({}),
  componentDidMount() {
    const faux = this.connectFauxDOM('svg', 'chart')
    const data = [4, 8, 15, 16, 23, 42]
    const barHeight = 20

    const scale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 100])
    const svg = d3.select(faux)
    const bar = svg
      .attr('width', '100%')
      .attr('height', barHeight * data.length)
      .attr('class', styles.chart)
      .selectAll('g')
        .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(0, ${barHeight * i})`)

    bar.append('rect')
      .attr('width', d => `${scale(d)}%`)
      .attr('height', barHeight - 1)

    bar.append('text')
      .attr('x', d => `${scale(d)}%`)
      .attr('y', barHeight / 2)
      .attr('dx', '-3')
      .attr('dy', '.35em')
      .attr('class', styles.text)
      .text(d => d)
  },
  render() {
    return (
      <div>
        <h2>SVG Bar Chart</h2>
        {this.state.chart}
      </div>
    )
  },
})

export default SvgBarChart
