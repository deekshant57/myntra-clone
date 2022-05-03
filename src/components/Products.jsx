import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./products.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
export default function Products({ data }) {
   //    console.log("data:", data);
   const theme = createTheme({
      status: {
         danger: "#e53e3e",
      },
      palette: {
         primary: {
            main: "#0971f1",
            darker: "#053e85",
         },
         neutral: {
            main: "#FF3E6C",
            contrastText: "#fff",
         },
      },
   });

   return (
      <div className="productsContainer">
         {data.map((e) => {
            return (
               <Card sx={{ maxWidth: 225}}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        width="100%"
                        image={e.link}
                        alt="green iguana"
                        
                     />
                     <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                           <b>{e.title}</b>
                        </Typography>
                        <Typography>Rs. {e.price}</Typography>
                        <Typography>{e.rating}</Typography>
                     </CardContent>
                  </CardActionArea>
                  <CardActions>
                     <ThemeProvider theme={theme}>
                        <Button
                           size="small"
                           color="neutral"
                           variant="contained"
                        >
                           Add To Cart
                        </Button>
                     </ThemeProvider>
                  </CardActions>
               </Card>
            );
         })}
      </div>
   );
}
