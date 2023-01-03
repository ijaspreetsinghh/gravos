import { Row, Text, Image, Container } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const PanelDetails = () => {
  const bestPanels = [
    "Maxeon",
    "REC Solar",
    "Panasonic",
    "Q CELLS",
    "Silfab",
    "AXITEC",
    "Canadian Solar",
    "JinkoSolar",
    "Trina Solar",
  ];

  return (
    <div style={{ background: "black", paddingTop: 64 }}>
      <Row
        justify='center'
        align='center'
        css={{
          "@media only screen and (max-width: 950px)": {
            display: "block",
            margin: "auto",
          },
        }}>
        <Container
          css={{
            width: "40%",
            "@media only screen and (max-width: 950px)": {
              marginBottom: 40,
              width: "80%",
            },
          }}>
          <Image
            draggable={false}
            src='/panel.png'
            alt='lightning'
            objectFit='contain'
            css={{
              height: 300,
              zIndex: 0,
              margin: 0,
              width: "100%",

              padding: 0,
            }}
          />
        </Container>
        <Container xs css={{ justifyContent: "center", margin: "auto" }}>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            We Use High Grade Panels
          </Text>

          <SizedBox height={64} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "500",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            2023 best solar panels for home installation
          </Text>
          <SizedBox height={20} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "500",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            There are many photovoltaic solar panels available to purchase and
            install. Out of all the companies currently making solar energy
            systems, the top names most often associated with the best solar
            panels on the market are:
          </Text>
          <SizedBox height={20} />
          {bestPanels.map((e, index) => {
            return (
              <Text
                h6
                key={e}
                className={montserrat.className}
                css={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "white",
                  display: "flex",

                  flexDirection: "column",
                  height: "auto",
                  margin: 0,
                }}>
                {index + 1}. {e}
              </Text>
            );
          })}
          <SizedBox height={20} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Typical panels are between 250 watts - 500 watts
          </Text>
          <SizedBox height={20} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "500",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Average Product Warranty - 20 Years
          </Text>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "500",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Average Power Warranty - 25 Years of 86% Output Power
          </Text>
        </Container>
      </Row>
      <SizedBox height={100} />
    </div>
  );
};
export default PanelDetails;
