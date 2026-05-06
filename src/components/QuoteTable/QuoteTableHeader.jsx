import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from '../Icons/SortIcon';
import './QuoteTableHeader.css';

const QuoteTableHeader = ({ onSortAsc, onSortDesc, userType }) => {
  return (
    <tr className="quote-table-header">
      {userType === 'CSR' && (
        <th className="quote-header-cell">
          <span className="quote-header-text">QuoteID</span>
        </th>
      )}
      <th className="quote-header-cell">
        <span className="quote-header-text">Company Name</span>
      </th>
      <th className="quote-header-cell text-center">
        <span className="quote-header-text">Cov Exists</span>
      </th>
      <th className="quote-header-cell text-center" style={{ width: '8%' }}>
        <span className="quote-header-text">Lives</span>
      </th>
      <th className="quote-header-cell text-center">
        <span className="quote-header-text">Quote Date</span>
        <button
          className="sort-button"
          onClick={onSortAsc}
          title="Sort Ascending"
          aria-label="Sort ascending"
        >
          <SortIcon direction="up" />
        </button>
        <button
          className="sort-button"
          onClick={onSortDesc}
          title="Sort Descending"
          aria-label="Sort descending"
        >
          <SortIcon direction="down" />
        </button>
      </th>
      <th className="quote-header-cell">
        <span className="quote-header-text">Plan</span>
      </th>
      <th className="quote-header-cell">
        <span className="quote-header-text">Status</span>
      </th>
      {userType === 'CSR' && (
        <>
          <th className="quote-header-cell">
            <span className="quote-header-text">Update</span>
          </th>
          <th className="quote-header-cell">
            <span className="quote-header-text">Link</span>
          </th>
          <th className="quote-header-cell">
            <span className="quote-header-text">Delete</span>
          </th>
        </>
      )}
    </tr>
  );
};

QuoteTableHeader.propTypes = {
  onSortAsc: PropTypes.func.isRequired,
  onSortDesc: PropTypes.func.isRequired,
  userType: PropTypes.string.isRequired,
};

export default QuoteTableHeader;