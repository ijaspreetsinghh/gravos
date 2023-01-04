"use client";

import { Button, Row, Image, Text, Container } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";
const Properties = () => {
  return (
    <Container
      wrap='nowrap'
      justify='flex-end'
      alignContent='center'
      css={{
        display: "flex",
        width: "min-intrinsic",
        margin: 0,
        padding: 0,

        "@media only screen and (max-width: 1000px)": {
          marginTop: 20,
        },
        "@media only screen and (max-width: 610px)": {
          display: "block",

          paddingTop: 20,
          width: "auto",
          margin: "auto",

          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
        },
      }}>
      <Image
        src='/info_1.svg'
        alt='EV Charging'
        width={130}
        css={{
          "@media only screen and (max-width: 610px)": {
            marginBottom: 20,
          },
        }}
      />

      <SizedBox width={10} />
      <Image
        src='/info_2.svg'
        alt='EV Charging'
        width={83}
        css={{
          "@media only screen and (max-width: 610px)": {
            marginBottom: 20,
          },
        }}
      />
      <SizedBox width={10} />
      <Image
        src='/info_3.svg'
        alt='EV Charging'
        width={134}
        css={{
          "@media only screen and (max-width: 610px)": {
            marginBottom: 20,
          },
        }}
      />
      <SizedBox width={10} />
      <Image
        src='/info_4.svg'
        alt='EV Charging'
        width={92}
        css={{
          "@media only screen and (max-width: 610px)": {
            marginBottom: 20,
          },
        }}
      />
      <SizedBox width={10} />
      <Image
        src='/info_5.svg'
        alt='EV Charging'
        width={92}
        css={{
          "@media only screen and (max-width: 610px)": {
            marginBottom: 20,
          },
        }}
      />
    </Container>
  );
};
const PropertiesOne = () => {
  return (
    <Container
      md
      wrap={"nowrap"}
      css={{
        width: "100%",
        height: "auto",
        background: "black",
        margin: 0,
        padding: 16,
        alignContent: "center",
        justifyContent: "space-between",
        display: "flex",
        "@media only screen and (max-width: 1000px)": {
          display: "block",
          flexWrap: "wrap",
          margin: "auto",
          alignContent: "center",
          justifyContent: "center",
          width: "fit-content",
        },
      }}>
      <div
        style={{
          width: "auto",
          maxWidth: "100%",
          margin: 0,
          height: "100%",
          justifyContent: "start",
          alignContent: "start",
        }}>
        <Text
          h3
          className={montserrat.className}
          css={{
            fontSize: 20,
            color: "white",
            display: "flex",
            width: "auto",
            flexDirection: "column",
            height: "auto",
            margin: "auto",
          }}>
          Finally a Solar Energy System that Really Works.
        </Text>
        <SizedBox height={12} />
        <div
          style={{
            width: "100%",

            margin: "auto",
            height: "100%",

            justifyContent: "start",
            alignContent: "start",
          }}>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              display: "flex",
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Learn How to Save 100% on your Power Bill
          </Text>
        </div>
      </div>
      <Container
        wrap='nowrap'
        css={{
          display: "flex",
          margin: 0,
          padding: 0,
          width: "fit-content",
          "@media only screen and (max-width: 1000px)": {
            display: "none",
          },
        }}>
        <Properties />
      </Container>
      <Row
        css={{
          display: "none",
          "@media only screen and (max-width: 1000px)": {
            display: "block",
          },
        }}
        justify='flex-end'>
        <Properties />
      </Row>
    </Container>
  );
};
export default PropertiesOne;
