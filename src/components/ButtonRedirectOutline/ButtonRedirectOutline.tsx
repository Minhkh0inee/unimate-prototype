import { Button, styled } from "@mui/material";
import "./ButtonRedirectOutline.css";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  url: string;
}

const CustomeButtonRedirectOutline = styled(Button)({
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

const ButtonRedirectOutline = ({ text, url }: Props) => {
  const navigate = useNavigate();

  function handleRedirect(url: string) {
    navigate(url);
  }

  return (
    <CustomeButtonRedirectOutline
      onClick={() => handleRedirect(url)}
      variant="outlined"
      className="button-outline"
    >
      {text}
    </CustomeButtonRedirectOutline>
  );
};

export default ButtonRedirectOutline;
