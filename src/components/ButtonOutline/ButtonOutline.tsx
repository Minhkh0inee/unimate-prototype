import { Button, styled } from "@mui/material";
import "./ButtonOutline.css";

interface Props {
  text: string;
}

const CustomeButtonOutline = styled(Button)({
  border: "1px solid black",
  background: "transparent",
  borderRadius: "74px",
  color: "black",
  padding: "20px 30px",

  "&:hover": {
    background: "#9a98e1",
    color: "black",
  },
});

const ButtonOutline = ({ text }: Props) => {
  return (
    <CustomeButtonOutline variant="outlined" className="button-outline">
      {text}
    </CustomeButtonOutline>
  );
};

export default ButtonOutline;
