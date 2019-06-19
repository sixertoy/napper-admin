import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const icons = ['displeased', 'unhappy', 'surprised', 'sleep'];
const words = ['Ouuups!', 'Désolé!', 'Oula, pas trop vite!', 'Oh nooo!'];

const NoContent = ({ description, link }) => {
  const word = words[Math.floor(Math.random() * words.length)];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  return (
    <div className="notice p40 align-center">
      <h1 className="mb20">
        <span>
          <i className={`icon icon-emo-${icon}`} />
        </span>
      </h1>
      <h3 className="mb20">
        <span>{word}</span>
      </h3>
      <p className="m0">Il n&apos;y a rien à afficher ici</p>
      {description && <p className="mt0">{description}</p>}
      {link && (
        <p>
          <Link to={`/${link}`}>
            <span>Ajouter un département</span>
          </Link>
        </p>
      )}
    </div>
  );
};

NoContent.defaultProps = {
  description: null,
  link: null,
};

NoContent.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
};

export default NoContent;
