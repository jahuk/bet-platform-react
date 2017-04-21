import React from 'react';

const Main = ({children}) => (
  <main>
    <h1>React Bet App</h1>
    <section>
      {children}
    </section>
  </main>
);

Main.propTypes = {
  children: React.PropTypes.object
};

export default Main;
