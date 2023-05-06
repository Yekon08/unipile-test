import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { handleSearch } from "../../store/movieThunk";

const Searchbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleSearch(searchText));
  };

  return (
    <Box sx={{ marginTop: "50px" }}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
};

export default Searchbar;
