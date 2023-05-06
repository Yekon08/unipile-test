import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearPicksError, setModalStatus } from "../../store/slices/movieSlice";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { handleSearchId, handleMoviePicks } from "../../store/movieThunk";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 20,
  p: 4,
  borderRadius: "4px",
};

const ModalContainer = () => {
  const modal = useAppSelector((state) => state.movie.modal);
  const modalId = useAppSelector((state) => state.movie.modalId);
  const data = useAppSelector((state) => state.movie.movieData);
  const loading = useAppSelector((state) => state.movie.modalLoading);
  const errorMsg = useAppSelector((state) => state.movie.modalError);
  const errorMsgPicks = useAppSelector((state) => state.movie.moviePicksError);
  const moviePicks = useAppSelector((state) => state.movie.moviePicks);
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

  const handlePick = (title: string) => {
    dispatch(handleMoviePicks(title));
  };

  const isFavorite = moviePicks.includes(data.Title);

  return (
    <Modal
      open={modal}
      onClose={() => {
        dispatch(setModalStatus(false));
        dispatch(clearPicksError());
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5">{data.Title}</Typography>{" "}
              <IconButton
                onClick={() => handlePick(data.Title)}
                sx={{ marginLeft: "10px", marginTop: "-4px" }}
              >
                {isFavorite ? (
                  <FavoriteIcon color="primary" />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </IconButton>
            </Box>
            {errorMsgPicks && (
              <Typography variant="caption" color="error.main">
                {errorMsgPicks}
              </Typography>
            )}
            <Typography variant="body1">{data.Actors}</Typography>
            <Typography variant="body2">{data.Year}</Typography>
            <Typography variant="body2">{data.Type}</Typography>
            <Typography variant="body1" sx={{ marginTop: "20px" }}>
              Resume :
            </Typography>
            <Typography variant="caption" sx={{ marginTop: "20px" }}>
              {data.Plot}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalContainer;
