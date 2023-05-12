// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTagItem = item => {
    const {name} = item

    return <p className="course-name-tag">{name}</p>
  }
  return (
    <div>
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list">
        {tagsList.map(eachTagItem => (
          <li key={eachTagItem.id} className="tag-item">
            {renderTagItem(eachTagItem)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
