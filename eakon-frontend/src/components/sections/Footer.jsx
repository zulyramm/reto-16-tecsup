import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../styles/footer-style";

const Footer = ({ credits }) => {

  return (
    <Box>
      <h1 style={{
        color: "green",
        textAlign: "center",
        marginTop: "-20px"
      }}>

      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Acerca de</Heading>
            <FooterLink href="#">nosotros</FooterLink>

          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">desarrollador de pw</FooterLink>
            <FooterLink href="#">administrador de redes</FooterLink>

          </Column>
          <Column>
            <Heading>contacto</Heading>
            <FooterLink href="#">Peru</FooterLink>

          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">Instagram</FooterLink>

          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">Twitter</FooterLink>

          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">facebook</FooterLink>

          </Column> 

        </Row>
      </Container>
    </Box>
  );
};
export default Footer;