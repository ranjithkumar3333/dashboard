import React from "react";
import "./ticket.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Ticket(props) {
  const { title, value, imgSrc, percent, bgColorClass } = props;

  return (
    <Card className="ticket">
      <div className="ticket-info">
        <div>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={title}
              className={`ticket-image ${bgColorClass}`}
            />
          )}
        </div>
        <CardContent>
          <Typography
            variant="body2"
            className="ticket-title"
            color="text.secondary"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="ticket-value"
            color="text.secondary"
          >
            {value}
          </Typography>
          <Typography
            variant="body2"
            className="ticket-percent"
            color="text.secondary"
          >
            {percent}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default Ticket;