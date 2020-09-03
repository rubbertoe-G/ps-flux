import React from "react";

const TextInput = (props) => {
  let wrapperClass = "form-Group";
  if (props.error.length > 0){
    wrapperClass += "has-error";
  }

  return (
    <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            className="form-control"
            onChange={props.onChange}
            value={props.value || ""}
          />
        </div>
      </div>
      {props.error && <div class="alert alert-danger">{props.error}</div>}
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
}

TextInput.defaults = {
  error: ""
}

export default Header;
