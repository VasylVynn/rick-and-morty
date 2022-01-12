import React from "react";

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="btn-check x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            setPageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {" "}
          {input}{" "}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
