import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import styled from 'styled-components';

const Box = styled.div`
  padding: 80px 60px;
  background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  position: relative;
  bottom: 0;
  width: 50%
  height: 10%;
  padding-top:10%
  
   
  @media (max-width: 1000px) {
    padding: 0px 0px;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 40%;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: black;
  margin-bottom: 40px;
  font-weight: bold;
`;
const Footer = () => {
    const [value, setValue] = React.useState([]);
    const [value2, setValue2] = React.useState([]);
    useEffect(() => {
        function Xhr(path) {
            return $.ajax({
                type: 'GET',
                url: 'http://serenity.ist.rit.edu/~plgics/proxy.php',
                data: path,
                cache: false,
                async: true,
                dataType: "json",
            });
        }

        Xhr({ path: '/footer/' }).done(function (json) {
            console.log(json);
            setValue(json.social);
            setValue2(json.quickLinks);

        });
    }, []);

    return (
        <Box>

            <Container>
                <Row>

                    <Column>
                        <Heading>Quick Links</Heading>
                        {value2.map(function (fac, index) {
                            return (
                                <li>
                                    <FooterLink href={fac.href}>{fac.title}</FooterLink>
                                </li>
                            )
                        })}
                    </Column>

                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href={value.facebook}>
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>

                        <FooterLink href={value.twitter}>
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>

                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
