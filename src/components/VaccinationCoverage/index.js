// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 16,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 16,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
            layout: 'horizontal',
            align: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill=" #f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
