import { Button, styled } from "@mui/material";
import "./ButtonRedirectFill.css";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  url: string;
}

const CustomeButtonRedirectFill = styled(Button)({
  background: "#9a98e1",
  borderRadius: "74px",
  color: "black",
  border: "none",
  padding: "20px 30px",

  "&:hover": {
    background: "white",
    color: "black",
    border: "#9a98e1",
  },
});

const ButtonRedirectFill = ({ text, url }: Props) => {
  const navigate = useNavigate();

  function handleRedirect(url: string) {
    navigate(url);
  }

  return (
    <CustomeButtonRedirectFill
      onClick={() => handleRedirect(url)}
      variant="outlined"
      className="button-redirect-fill"
    >
      {text}
    </CustomeButtonRedirectFill>
  );
};

export default ButtonRedirectFill;
