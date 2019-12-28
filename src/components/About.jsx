import React from 'react';


function About(props) {
  const match = props.match;
  console.log(match);

  console.log(match.params.id, ':　idは?');

  // function About(props) {
  //   const location = props.location;
  //   console.log(location);

    // propsのhistory
  // function About({history}) {
  // console.log(props, '@@@@@');
  // const { history } = props;

  return (
    // <h1 onClick={() => { history.goBack(); }}>
    <h1>
      Aboutです
    </h1>
  );
}

export default About;
