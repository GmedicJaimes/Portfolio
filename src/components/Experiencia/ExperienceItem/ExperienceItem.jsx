import React from "react";
import PropTypes from "prop-types";
import "../Experiencia.css";

const ExperienceItem = (props) => {
  return (
    <>
      {/* {console.log(props)} */}
      <div className="box" key={props.id}>
        <div className="companyName">
          <h2>{props.job}</h2>
          <h3>{props.company}</h3>
          <h4>{props.date}</h4>
        </div>
        <div className="descriptionCompany">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

ExperienceItem.propTypes = {
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceItem;
