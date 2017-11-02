import React, { Component } from 'react';
import styled from 'styled-components'

const SplashImg = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

class HomeBody extends Component {
  render() {
    return (
      <section>
        <SplashImg>
          <img src="https://andrescavelier.files.wordpress.com/2008/11/dsc_0007.jpg" />
        </SplashImg>
      </section>
    );
  }
}

export default HomeBody;