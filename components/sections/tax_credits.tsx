"use client";
import { Container, Row, Text } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const TaxCredits = () => {
  return (
    <div style={{ background: "#00c2ff" }}>
      <Row>
        {" "}
        <Container
          xs
          style={{
            background: "#00c2ff",
            padding: 32,
          }}>
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "semibold",
              color: "white",
              display: "flex",
              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Household Incentives and Tax Credits
          </Text>
          <SizedBox height={4} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "normal",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Starting 2023
          </Text>
          <SizedBox height={16} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={32} />
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Tax Credits
          </Text>
          <SizedBox height={10} />
          <Row justify='space-between'>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Item
            </Text>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Amount
            </Text>
          </Row>
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Solar System Installation
            </Text>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              30% Full Returned Credit
            </Text>
          </Row>
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Battery System Installation
            </Text>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Included
            </Text>
          </Row>
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              Wiring Upgrade For Heat Pump / AC
            </Text>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              $4,000
            </Text>
          </Row>
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              New Heat Pump / AC Install
            </Text>
            <Text
              h4
              className={montserrat.className}
              css={{
                fontSize: 14,
                fontWeight: "$semibold",
                color: "white",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              $4,000 - $8,000
            </Text>
          </Row>
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
        </Container>{" "}
        <Container
          xs
          style={{
            background: "#00c2ff",
            padding: 32,
          }}></Container>
      </Row>
    </div>
  );
};

export default TaxCredits;
