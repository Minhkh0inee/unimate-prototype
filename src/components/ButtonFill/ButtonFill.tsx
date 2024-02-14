import { Button, styled } from "@mui/material";
import "./ButtonFill.css";

const CustomeButtonFill = styled(Button)({
  background: "#9a98e1",
  borderRadius: "74px",
  color: "black",
});

const ButtonFill = () => {
  const text = "Button";

  return (
    <CustomeButtonFill variant="contained" className="button-fill">
      {text}
    </CustomeButtonFill>
  );
};

export default ButtonFill;
