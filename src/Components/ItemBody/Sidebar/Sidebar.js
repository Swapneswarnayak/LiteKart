import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const sidebarData1 = [
  "Novelty Gifts",
  "Activewear",
  "Based in the U.K",
  "Mother's Day",
  "Summer styles",
  "Spring styles",
  "For the Eco Consious",
  "Healthy eats & drinks",
  "For the Foodie",
  "For the pet lover",
  "Based In France",
  "Based In Germany",
  "Premium contemporary",
  "Gifts for Kids",
  "For the coffee & te lover",
  "Based in the Nordics",
  "Everyday Jewelry",
  "Self care",
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        // border: "2px solid red",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <Box>
        <Box
          sx={{
            height: "300px",
            //   border: "2px solid yellow",
            overflowY: "auto",
            marginRight: "-17px",
            //   paddingRight: "17px",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", letterSpacing: 1.2 }}
          >
            Trending Collections
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1.2,
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            All European brands
          </Typography>
          <Divider sx={{ width: "52%", mb: 1 }} />
          {sidebarData1.map((el, i) => {
            return (
              <Typography
                variant="body2"
                sx={{ letterSpacing: 1.5, mb: 1, color: "text.secondary" }}
              >
                {el}
              </Typography>
            );
          })}
        </Box>
        <Divider sx={{ width: "75%", mt: 1 }} />
        <Box sx={{ width: "70%", display: "flex", justifyContent: "center" }}>
          <KeyboardArrowDownIcon sx={{ fontSize: "30px", fontWeight: 200 }} />
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 550, letterSpacing: 1.2, color: "#333" }}
        >
          Filters
        </Typography>
        <Divider sx={{ width: "75%", mt: 1, mb: 1 }} />
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: 520,
            color: "#333",
            letterSpacing: 1.2,
          }}
        >
          Brand values
        </Typography>

        <FormControlLabel
          sx={{ height: "25px", mt: 2 }}
          control={<Checkbox />}
          label=<Typography sx={{ fontSize: "14px", letterSpacing: 1 }}>
            Eco-friendly &nbsp; 100+
          </Typography>
        />
        <FormControlLabel
          sx={{ height: "25px", mt: 1 }}
          control={<Checkbox />}
          label=<Typography
            variant="body1"
            sx={{ fontSize: "14px", letterSpacing: 1 }}
          >
            Gives back &nbsp; 100+
          </Typography>
        />
        <FormControlLabel
          sx={{ height: "25px", mt: 1 }}
          control={<Checkbox />}
          label=<Typography
            variant="body1"
            sx={{ fontSize: "14px", letterSpacing: 1 }}
          >
            Handmade &nbsp; 100+
          </Typography>
        />
        <Typography variant="body2" sx={{ mt: 2, textDecoration: "underline" }}>
          Show more
        </Typography>
        <Divider sx={{ width: "75%", mt: 2, mb: 2 }} />

        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: 520,
            color: "#333",
            letterSpacing: 1.2,
          }}
        >
          Lead time
        </Typography>

        <FormControlLabel
          sx={{ height: "25px", mt: 2 }}
          control={<Radio />}
          label=<Typography sx={{ fontSize: "14px", letterSpacing: 0.5 }}>
            3 days or less &nbsp; 100+
          </Typography>
        />
        <FormControlLabel
          sx={{ height: "25px", mt: 1 }}
          control={<Radio />}
          label=<Typography
            variant="body1"
            sx={{ fontSize: "14px", letterSpacing: 0.5 }}
          >
            6 days or less &nbsp; 1000+
          </Typography>
        />
        <FormControlLabel
          sx={{ height: "25px", mt: 1 }}
          control={<Radio />}
          label=<Typography
            variant="body1"
            sx={{ fontSize: "14px", letterSpacing: 0.5 }}
          >
            9 days or less &nbsp; 1000+
          </Typography>
        />
        <Typography variant="body2" sx={{ mt: 2, textDecoration: "underline" }}>
          Show more
        </Typography>
        <Divider sx={{ width: "75%", mt: 2, mb: 2 }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
