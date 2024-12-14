import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((item, index) => {
        const id = uuidv4();
        return (
          <div className="job-desc" key={id}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
