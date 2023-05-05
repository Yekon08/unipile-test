import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSearchId, setModalStatus } from "../../store/slices/movieSlice";
import { useEffect } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalContainer = () => {
  const modal = useAppSelector((state) => state.movie.modal);
  const modalId = useAppSelector((state) => state.movie.modalId);
  const data = useAppSelector((state) => state.movie.movieData);
  const loading = useAppSelector((state) => state.movie.modalLoading);
  const errorMsg = useAppSelector((state) => state.movie.modalError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modal && modalId) {
      dispatch(handleSearchId(modalId));
    }
  }, [modal, modalId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", marginTop: "35px" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (errorMsg) {
    return (
      <Typography sx={{ marginTop: "35px" }} variant="h4" color="error.main">
        {errorMsg}
      </Typography>
    );
  }

  console.log("data: ", data);

  return (
    <Modal open={modal} onClose={() => dispatch(setModalStatus(false))}>
      <Box sx={style}>bonjour</Box>
    </Modal>
  );
};

export default ModalContainer;
