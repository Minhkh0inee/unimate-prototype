import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

interface Props {
  open: boolean;
  close: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

const SnackBar = ({ open, close }: Props) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={close}
      message="Note archived"
      key={"bottom" + "center"}
    >
      <Alert
        onClose={close}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Sign in successfully
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
