import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSearchId, setModalStatus } from "../../store/slices/movieSlice";
import { useEffect } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  boxShadow: 20,
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
      <Box sx={style}>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  if (errorMsg) {
    return (
      <Box sx={style}>
        <Typography sx={{ marginTop: "35px" }} variant="h4" color="error.main">
          {errorMsg}
        </Typography>
      </Box>
    );
  }

  return (
    <Modal
      open={modal}
      onClose={() => {
        dispatch(setModalStatus(false));
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: "flex" }}>
          <img
            src={data.Poster}
            alt={`${data.Title} poster`}
            style={{ width: "200px", height: "auto%", borderRadius: "4px" }}
          />
          <Box sx={{ marginLeft: "20px" }}>
            <Typography variant="h5">{data.Title}</Typography>
            <Typography variant="body1">{data.Director}</Typography>
            <Typography variant="body1">{data.Actors}</Typography>
            <Typography variant="body2">{data.Released}</Typography>
            <Typography variant="body2">{data.Runtime}</Typography>
            <Typography variant="body2">{data.Genre}</Typography>
            <Typography variant="body2">{data.Language}</Typography>
            <Typography variant="body2">{data.Rated}</Typography>
            <Typography variant="body2">
              Metascore : {data.Metascore}
            </Typography>
            <Typography variant="body2">{data.BoxOffice}</Typography>
            <Typography variant="body2">
              Box office : {data.BoxOffice}
            </Typography>
            <Typography variant="body2">DVD: {data.DVD}</Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          Resume :
        </Typography>
        <Typography variant="caption" sx={{ marginTop: "20px" }}>
          {data.Plot}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalContainer;