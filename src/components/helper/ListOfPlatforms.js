import React from "react";
import { Badge } from "reactstrap";
import "./ListOfPlatforms.css";

const ListOfPlatforms = (props) => (
  <div>
    {props.platforms.map((system) => (
      <span key={system}>
        <Badge pill className="customBadge">
          {system}
        </Badge>{" "}
      </span>
    ))}
  </div>
);

export default ListOfPlatforms;
