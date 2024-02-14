import { IconType } from "react-icons";
import "./InputField.css";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  Icon: IconType;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (
  { label, Icon, value, onChange, type }: Props,
  ref: React.Ref<HTMLInputElement>
) => {
  // console.log("Test in InputField", onChange);

  return (
    <div className="input-wrapper">
      <label>{label}</label>

      <div className="input-field-wrapper">
        <input
          type={type}
          className="input-field"
          placeholder={label}
          value={value || ""}
          onChange={onChange}
          ref={ref}
        />

        <Icon className="input-icon" />
      </div>
    </div>
  );
};

export default InputField;
