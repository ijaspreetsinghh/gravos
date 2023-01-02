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
          The&nbsp;
        </Text>

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
          Future&nbsp;
        </Text>

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
          in&nbsp;
        </Text>

        <Text
          h1
          className={montserrat.className}
          css={{
            fontSize: 56,
            width: "fit-content",
            fontWeight: "800",
            color: "white",

            "@media only screen and (max-width: 700px)": {
              fontSize: 48,
            },
            "@media only screen and (max-width: 500px)": {
              fontSize: 36,
            },
          }}>
          Renewable&nbsp;
        </Text>

        <Text
          h1
          className={montserrat.className}
          css={{
            fontSize: 56,
            width: "fit-content",
            fontWeight: "800",
            color: "white",

            "@media only screen and (max-width: 700px)": {
              fontSize: 48,
            },
            "@media only screen and (max-width: 500px)": {
              fontSize: 36,
            },
          }}>
          Energy&nbsp;
        </Text>

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
          Beyond&nbsp;
        </Text>

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
          Just&nbsp;
        </Text>
        <Text
          h1
          className={montserrat.className}
          css={{
            fontSize: 56,
            width: "fit-content",
            fontWeight: "800",
            color: "#FFE600",
            "@media only screen and (max-width: 700px)": {
              fontSize: 48,
            },
            "@media only screen and (max-width: 500px)": {
              fontSize: 36,
            },
          }}>
          Solar
        </Text>
      </Container>
    </Container>
  );
};
export default HeaderText;
