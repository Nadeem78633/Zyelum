import React, { useState, useRef } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Popper,
  Paper,
  Typography,
  ClickAwayListener,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 800,
          width: "100%",
          marginTop: "50px",
        }}
      >
        {/* Search Bar */}
        <Box
          ref={searchRef}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 1,
            borderRadius: open ? "25px 25px 0 0" : "25px",
            transition: "border-radius 0.3s ease",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={handleFocus}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "action.active" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSearch}
                    edge="end"
                    style={{
                      backgroundColor: "red",
                      borderRadius: "25px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      background: "linear-gradient(90deg, #07cdbe, #006ff8)",
                      color: "white",
                    }}
                  >
                    Search
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "inherit",
                border: "none",
                "&.Mui-focused": {
                  boxShadow: "none",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </Box>

        {/* Merged Modal */}
        <Popper
          open={open}
          anchorEl={searchRef.current}
          placement="bottom-start"
          modifiers={[
            {
              name: "preventOverflow",
              options: {
                boundary: "window",
              },
            },
          ]}
          sx={{
            zIndex: 1300,
            width: searchRef.current
              ? `${searchRef.current.offsetWidth}px`
              : "100%",
            marginTop: "-1px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "0 0 25px 25px",
            overflow: "hidden",
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 2, width: "100%", borderRadius: "0 0 25px 25px" }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Recent Searches
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              - Search Item 1
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              - Search Item 2
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              - Search Item 3
            </Typography>
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
