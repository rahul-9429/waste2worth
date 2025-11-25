import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Waste2Worth</title>
        <meta name="description" content="A platform for classifying agricultural waste and connecting with industries." />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;