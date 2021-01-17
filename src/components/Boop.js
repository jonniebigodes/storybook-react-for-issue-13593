import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * Component create for testing purposes
 */
export default function Boop({ locale }) {
  return (
    <>
      <h3>i'm a locale</h3>
      {locale}
    </>
  );
}
Boop.propTypes = {
  locale: PropTypes.string,
};

Boop.defaultProps = {
  locale: "Hola!",
};
