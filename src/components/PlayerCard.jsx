// PlayerCard.jsx

import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <Card
      className="rounded-4 m-auto player-card"
      role="button"
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img
          variant="top"
          src={img}
          className="player-logo rounded-top-4"
        />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => (
            <li key={i} className="list-unstyled h5 text-start mb-3">
              🏀 {item}
            </li>
          ))}
        </ul>
      )}

      {/* //! short circuit yöntemi */}
      {/* {showImage && (
        <Card.Img variant="top" src={img} className="player-logo" />
      )}
      {!showImage && (
        <ul className="m-auto">
          {statistics.map((item, i) => (
            <li className="list-unstyled h5 text-start " key={i}>
              {" "}
              🏀 {item}
            </li>
          ))}
        </ul>
      )} */}

      <Card.Footer className="footer rounded-bottom-4">
        <Card.Title className="name">
        <a href={`https://tr.wikipedia.org/wiki/${name}`} target="blank" className="text-decoration-none">
            {name}
          </a>
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
