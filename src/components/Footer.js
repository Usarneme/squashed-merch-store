import React from 'react';

function Footer() {
  const footerStyles = {
    padding: '22px',
    textAlign: 'left',
    background: 'rgba(0,0,0,0.15)',
    borderTop: '1px groove gray'
  }

  return (
    <div style={ footerStyles }>
      <h4>Footer - &copy; 2021 - John and Tom</h4>
    </div>
  )
}

export default Footer;
