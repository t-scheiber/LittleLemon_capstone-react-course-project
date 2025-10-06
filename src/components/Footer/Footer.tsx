import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

export const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Order Online</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                Am Stephansplatz 1<br />
                1010 Wien <br />
                AUSTRIA <br />
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+43650123456789" target="_blank" rel="external">
                +43 650 123 456 789
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                contact@littlelemon.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://x.com/littlelemon"
                target="_blank"
                rel="external"
              >
                X
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by Thomas Scheiber.</span>
        <p>2024 Little Lemon &copy; All rights reserved.</p>
      </Copyright>
    </Container>
  );
};
