import { Box, Typography } from "@mui/material";

const Page = ({ param }) => {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <Box>
        <Box>
          <Typography>氏名</Typography>
          <Typography></Typography>
        </Box>
        <Box>
          <Typography>ふりがな</Typography>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
