import Duties from "./Duties";

const JobInfo = ({ jobs, currItem }) => {
  const { id, title, dates, duties, company } = jobs[currItem];
  return (
    <article className="jobs-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
