import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Search = () => {
  return (
    <StyledSearch>
      <InputBase placeholder="Search Here ... !" />
    </StyledSearch>
  );
};
export default Search;
