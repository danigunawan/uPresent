import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function ManageSchoolForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="universityName"
        type="text"
        label="University Name"
        onChange={props.onChange}
        name="universityName"
        value={props.fence.universityName}
        error={props.errors.universityName}
        readOnly={false}
      />
      <TextInput
        id="longitude"
        type="text"
        label="Longitude"
        onChange={props.onChange}
        name="longitude"
        value={props.fence.longitude}
        error={props.errors.longitude}
        readOnly={false}
      />
      <TextInput
        id="latitude"
        type="text"
        label="Latitude"
        onChange={props.onChange}
        name="latitude"
        value={props.fence.latitude}
        error={props.errors.latitude}
        readOnly={false}
      />
      <TextInput
        id="radiusInMeter"
        type="text"
        label="Radius (m)"
        onChange={props.onChange}
        name="radiusInMeter"
        value={props.fence.radiusInMeter}
        error={props.errors.radiusInMeter}
        readOnly={false}
      />
      <input type="submit" value="Save" className="btn btn-primary mr-1" />
    </form>
  );
}

ManageSchoolForm.propTypes = {
  fence: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ManageSchoolForm;
