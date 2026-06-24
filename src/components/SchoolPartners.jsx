import { SCHOOL_PARTNERS } from '../data/schoolPartners'

export default function SchoolPartners() {
  return (
    <div className="partner-zigzag">
      {SCHOOL_PARTNERS.map((school, i) => (
        <div className={`partner-row${i % 2 === 1 ? ' reverse' : ''}`} key={school.name}>
          <div className="partner-image">
            <img src={school.image} alt={`${school.name} campus`} />
          </div>
          <div className="partner-info">
            <h3>{school.name}</h3>
            <p>{school.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
