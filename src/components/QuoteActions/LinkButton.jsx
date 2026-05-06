import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { generateQuoteLink } from '../../utils/quoteUtils';
import './ActionButton.css';

const LinkButton = ({ quote, region, onClick }) => {
  const linkUrl = useMemo(
    () => generateQuoteLink(quote, region),
    [quote, region]
  );

  const hasExistingLink = !!quote.link;
  const isLocalQuote = quote.link?.includes('QUOTE.ENCON.LOCAL');

  const handleClick = (e) => {
    e.preventDefault();
    if (isLocalQuote) {
      window.open(quote.link, '_blank');
    } else {
      onClick();
    }
  };

  return (
    <button
      className="action-button link-button"
      onClick={handleClick}
      title={hasExistingLink ? 'View Quote' : 'Create Aura Quote'}
      aria-label={hasExistingLink ? 'View Quote' : 'Create Aura Quote'}
    >
      <img
        src={
          hasExistingLink
            ? isLocalQuote
              ? '/images/Internet_Explorer_7_Logo.gif'
              : '/images/aura_icon.gif'
            : '/images/no_quote.gif'
        }
        alt={hasExistingLink ? 'View Quote' : 'Create Quote'}
        width={22}
        height={hasExistingLink ? 22 : 16}
      />
    </button>
  );
};

LinkButton.propTypes = {
  quote: PropTypes.shape({
    quoteid: PropTypes.string.isRequired,
    link: PropTypes.string,
    programcod: PropTypes.number,
  }).isRequired,
  region: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default LinkButton;
