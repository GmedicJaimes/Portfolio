import React from "react";

const ExperienceItem = ({ id, job, company, date, description }) => {
  return (
    <>
      <div className="box" key={id}>
        <div className="companyName">
          <h2>{job}</h2>
          <h3>{company}</h3>
          <h4>{date}</h4>
        </div>
        <div className="descriptionCompany">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
