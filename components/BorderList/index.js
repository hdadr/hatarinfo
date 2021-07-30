import { Box, Divider, List, ListItem } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedBorder } from "../../store/actions";

const borderClosed = (openingHours) => {
  const currentHour = new Date().getHours();
  const [open, close] = openingHours.split("-");

  return currentHour < open || currentHour >= close ? true : false;
};

const BorderList = ({ borders = [], openBorderInformation }) => {
  const dispatch = useDispatch();

  const handleBorderListItemClick = (border) => {
    dispatch(setSelectedBorder(border));
    openBorderInformation();
  };

  return (
    <List aria-label="borders">
      {borders.map((border) => {
        return (
          <React.Fragment key={border.name}>
            <ListItem disabled={borderClosed(border.openingHours)} onClick={() => handleBorderListItemClick(border)} button>
              <div>
                <div>{border.name}</div>
                <Box color="text.secondary">{border.openingHours}</Box>
              </div>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};
export default BorderList;
