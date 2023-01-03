import { Button, Row, Text, Image, Container } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import HeaderText from "../header_text";
import OfferImage from "../offer_image";
import PropertiesOne from "../properties/properties_1";
import SizedBox from "../sized_box";
import WhyKinetic from "../why_kinetic_overlay";
import WhyLoser from "../why_loser";

const HeaderSection = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: 0,
        background: "#00C2FF",
        padding: 0,
      }}>
      <HeaderText />

      <div style={{ margin: 0, padding: 0 }}>
        <Row
          justify='space-between'
          align='flex-start'
          css={{ position: "relative", top: 70 }}>
          <Container
            css={{
              display: "none",

              position: "absolute",
              zIndex: 3,
              bottom: 0,

              "@media only screen and (max-width: 950px)": {
                display: "block",
                justifyContent: "center",
                margin: "auto",
                width: "fit-content",
                position: "unset",
                marginTop: -50,
              },

              "@media only screen and (max-width: 490px)": {
                margin: 16,
                display: "block",
                justifyContent: "center",

                width: "fit-content",
                position: "unset",
                marginTop: -50,
              },
            }}>
            <OfferImage />
            <SizedBox height={16} />

            <WhyLoser />
          </Container>

          <Container
            css={{
              position: "absolute",
              zIndex: 3,
              // top: 50,
              display: "block",
              "@media only screen and (max-width: 950px)": {
                display: "none",
              },
            }}>
            {" "}
            <Row
              justify='flex-start'
              align='flex-start'
              css={{ width: "50%", marginBottom: 20 }}>
              <OfferImage />
            </Row>
            <Row>
              {" "}
              <WhyLoser />
            </Row>
          </Container>
          <Container
            fluid
            css={{
              right: 20,
              position: "absolute",
              zIndex: 2,
              margin: 0,
              padding: 0,

              display: "flex",
              width: "fit-content",
              "@media only screen and (max-width: 950px)": { marginTop: 300 },
              "@media only screen and (max-width: 700px)": {
                position: "absolute",
                margin: "auto",
                display: "inline-flex",
                left: 10,
                padding: 16,
                marginTop: 250,
                justifyContent: "center",
              },
              "@media only screen and (max-width: 360px)": {
                left: 0,
              },
            }}>
            <WhyKinetic />
          </Container>
        </Row>
        <Image
          draggable={false}
          src='/house.png'
          alt='house'
          objectFit='cover'
          css={{
            width: "100%",
            margin: 0,
            zIndex: 0,
            padding: 0,
            display: "flex",

            height: 600,

            "@media only screen and (max-width: 500px)": {
              height: 650,
            },
          }}
        />{" "}
      </div>
    </div>
  );
};

export default HeaderSection;
