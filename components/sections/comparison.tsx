"use client";
import { Container, Row, Image, Text } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const Comparison = () => {
  return (
    <div
      style={{
        background: "white",
        margin: 0,
        padding: 0,
      }}>
      <Row
        justify='space-between'
        css={{
          display: "flex",
          margin: 0,
          padding: 0,
        }}>
        <Row
          align='center'
          css={{
            background: "#7f21e3",
            display: "flex",
            padding: 0,
            margin: 0,
          }}>
          <Image src='/g_white.png' alt='Gravos' height={130} />
          <Text
            h6
            size={24}
            color='white'
            weight={"bold"}
            className={montserrat.className}
            css={{ position: "relative", right: 0 }}>
            V
          </Text>
        </Row>
        <Row
          align='center'
          css={{
            background: "#ff0000",
            display: "flex",
            padding: 0,
            margin: 0,
          }}>
          <Text
            h6
            size={24}
            color='white'
            weight={"bold"}
            className={montserrat.className}
            css={{ position: "relative", left: 0 }}>
            S
          </Text>
          <Image
            src='/c_white.svg'
            alt='Conventional Solar Panel'
            height={130}
          />
        </Row>
      </Row>
      <Container
        responsive={false}
        css={{ background: "#1d1d1d", paddingTop: 30, paddingBottom: 30 }}>
        <Image
          src='/comparison.svg'
          alt='Comparison Gravos vs Conventional Solar Panel'
        />
      </Container>
    </div>
  );
};

export default Comparison;
