import SizedBox from "../sized_box";
import { Container, Image, Row, Text } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
const AppSnapshots = () => {
  return (
    <Container
      responsive={false}
      justify='center'
      css={{ background: "#fed600" }}>
      <SizedBox height={50} />
      <Row
        justify='space-evenly'
        align='center'
        css={{
          "@media only screen and (max-width: 950px)": {
            display: "block",
          },
        }}>
        <Container
          responsive={false}
          alignContent='center'
          css={{ width: "fit-content", alignContent: "center" }}>
          <Text
            className={montserrat.className}
            h4
            weight={"bold"}
            size={14}
            css={{
              "@media only screen and (max-width: 1000px)": {
                justifyContent: "center",
                textAlign: "center",
              },
            }}>
            Mobile Monitoring App
          </Text>
          <Text
            className={montserrat.className}
            h4
            weight={"extrabold"}
            size={20}
            css={{
              "@media only screen and (max-width: 1000px)": {
                justifyContent: "center",
                textAlign: "center",
                marginBottom: 20,
              },
            }}>
            Coming Soon
          </Text>
        </Container>
        <Image
          draggable={false}
          src='/app_snapshots.png'
          alt='lightning'
          objectFit='cover'
          css={{
            width: "100%",
            maxWidth: 800,

            zIndex: 0,
            margin: "auto",
            padding: 0,
            display: "flex",
          }}
        />
      </Row>
      <SizedBox height={20} />
      <Text
        className={montserrat.className}
        h4
        weight={"bold"}
        size={14}
        css={{ justifyContent: "center", textAlign: "center" }}>
        Our system has a Mobile App coming soon.
      </Text>
      <SizedBox height={50} />
    </Container>
  );
};

export default AppSnapshots;
