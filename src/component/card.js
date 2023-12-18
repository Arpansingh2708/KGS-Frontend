import * as React from "react";
import { styled, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Stack from "@mui/material/Stack";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PizzaCard( props) {
  const [expanded, setExpanded] = React.useState(false);
  const {name , type , amount , times } = props.pizza;
// console.log(props.pizza);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <Card
          className="border-2 border-gray-700 shadow-md cursor-pointer mt-2 ml-2 mr-2"
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // name
            title={name}
            // type
            subheader={type}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Amount:{amount}
              <br />
              <br />
              No. of times ordered: {times}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div className="mb-2">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            ></ExpandMore>
          </CardActions>
        </Card>
  );
}
