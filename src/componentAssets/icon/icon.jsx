import PropTypes from 'prop-types';
import React from 'react';

import IcoMoon from 'react-icomoon';

const Icon = ({ iconSet = 0, ...props }) => {
  const iconPack = {
    0: require('./selection.json'),
    1: require('./selection-activities.json'),
  };

  return <IcoMoon iconSet={iconPack[iconSet]} {...props} />;
};

Icon.propTypes = {
  iconSet: PropTypes.number,
};

export default Icon;
