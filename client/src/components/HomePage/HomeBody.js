import React, { Component } from 'react';
import styled from 'styled-components'

const SplashImg = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

class HomeBody extends Component {
  render() {
    return (
      <section>
        <SplashImg>
          <img src="http://www.punakaikibeachhostel.co.nz/wp-content/themes/punakaiki-responsive/images/header05.jpg" alt=""/>
        </SplashImg>
      </section>
    );
  }
}

export default HomeBody;