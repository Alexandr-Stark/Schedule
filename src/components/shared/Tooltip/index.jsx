// Absolute imports
import React from 'react';
import ReactTooltip from 'rc-tooltip';

// Styles
import 'rc-tooltip/assets/bootstrap.css';

const Tooltip = ({ children, ...props }) => (
  <ReactTooltip
    placement="top"
    trigger="hover"
    {...props}
  >
    {children}
  </ReactTooltip>
);

export default Tooltip;
