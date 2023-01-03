"use client";
import { Container, Row, Text } from "@nextui-org/react";
import { montserrat } from "../pages/_app";

const HeaderText = () => {
  return (
    <Container
      fluid
      css={{
        paddingBottom: 0,
        paddingRight: 0,
        paddingTop: 48,
        paddingLeft: 16,
        margin: 0,
        "@xs": { paddingLeft: 16, margin: "auto" },
        "@sm": { paddingLeft: 48, margin: 0 },
        "@md": { paddingLeft: 64, margin: 0 },
        maxWidth: 700,
        width: "fit-content",
      }}>
      <Container css={{ display: "flex", width: "100%" }}>
        <Text
          h1
          className={montserrat.className}
          css={{
            fontSize: 56,
            width: "fit-content",
            fontWeight: "800",

            "@media only screen and (max-width: 700px)": {
              fontSize: 48,
            },
            "@media only screen and (max-width: 500px)": {
              fontSize: 36,
            },
          }}>
          The Future in{" "}
          <b style={{ color: "#7f31e5", fontWeight: "800" }}>
            Renewable Energy
          </b>{" "}
          Beyond Just{" "}
          <b style={{ color: "#FFE600", fontWeight: "800" }}>Solar</b>
        </Text>
      </Container>
    </Container>
  );
};
export default HeaderText;
