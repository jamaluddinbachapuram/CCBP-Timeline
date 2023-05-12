// Write your code here
import {Chrono} from 'react-chrono'

import './index.css'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="program-heading">
            My JOURNEY OF <br /> <span className="span">CCBP 4.0</span>
          </h1>
        </div>

        <div className="timeline-container">
          <Chrono
            theme={{secondary: 'white'}}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            scrollable
          >
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
