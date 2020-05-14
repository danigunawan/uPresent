import React, { useState, useEffect } from "react";
import ManageFenceForm from "./ManageFenceForm";
import Header from "../common/Header";
import * as fenceApi from "../../api/fenceApi";
import { toast } from "react-toastify";

const ManageFencesPage = (props) => {
  const [errors, setErrors] = useState({});

  const [fence, setFence] = useState({
    universityName: "",
    longitude: "",
    latitude: "",
    radiusInMeter: "",
    username: "",
  });

  useEffect(() => {
    const universityName = props.match.params.universityName;
    if (universityName) {
      fenceApi
        .getFenceByUniversityName(universityName)
        .then((_fence) => setFence(_fence.data));
    }
  }, [props.match.params.universityName]);

  function handleChange({ target }) {
    setFence({
      ...fence,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!fence.universityName)
      _errors.universityName = "University name is required.";
    if (!fence.longitude) _errors.longitude = "Longitude is required";
    if (!fence.latitude) _errors.latitude = "Latitude is required.";
    if (!fence.radiusInMeter) _errors.radiusInMeter = "Radius is required.";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    fence.longitude = parseFloat(fence.longitude);
    fence.latitude = parseFloat(fence.latitude);
    fence.radiusInMeter = parseFloat(fence.radiusInMeter);
    fence.username = localStorage.getItem("user");

    fenceApi.saveFence(fence).then((_resp) => {
      if (_resp.message === "ok") {
        props.history.push("/fences");
        toast.success("Fence updated");
      } else toast.warn("There was an error. Please try again later.");
    });
  }

  return (
    <div className="container-fluid">
      <Header />
      <div className="main" style={{padding: '10px'}}>
        <h2>Manage Geo-Fence</h2>
        <ManageFenceForm
          errors={errors}
          fence={fence}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ManageFencesPage;
