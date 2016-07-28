import React from 'react'
import SimpleBarChart from 'components/SimpleBarChart'
import SvgBarChart from 'components/SvgBarChart'

class D3Components extends React.Component {
  render() {
    return (
      <div>
        <SimpleBarChart />
        <SvgBarChart />
      </div>
    )
  }
}

export default D3Components
