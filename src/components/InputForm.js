import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Select } from "antd";
const InputForm = ({ label, value, onChange, select, options, required }) => {
  const { Option } = Select;
  return (
    <div style={{ margin: "1em 0" }}>
      <span>{label}</span>
      {!select ? (
        <Input value={value} onChange={onChange} required={required} />
      ) : (
        <>
          <br />{" "}
          <Select style={{ width: "100%" }} value={value} onChange={onChange}>
            {options?.map((el, i) => (
              <Option key={i} value={el}>
                {el}
              </Option>
            ))}
          </Select>
        </>
      )}
    </div>
  );
};

InputForm.propTypes = {};

InputForm.defaultProps = {
  required: false,
};

export default InputForm;
