import { Button, Container, Image, Text } from "@nextui-org/react";
import { montserrat } from "../pages/_app";
import SizedBox from "./sized_box";

const WhyLoser = () => {
  return (
    <div>
      <Container
        css={{
          display: "block",
          margin: 0,
          padding: 12,

          width: "auto",
          height: "auto",
          background: "rgba(0, 0, 0, 0.75)",

          flexDirection: "column",

          marginTop: 0,
          marginLeft: 20,
          marginRight: 0,
          marginBottom: 0,

          borderRadius: 10,
          boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
        }}>
        {" "}
        <div style={{ display: "flex" }}>
          <Text
            h3
            className={montserrat.className}
            css={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              margin: "auto",
              "@media only screen and (max-width: 1200px)": {
                fontSize: 16,
              },
            }}>
            Why just having <b style={{ color: "#FFE600" }}>Solar</b>{" "}
            <b style={{ color: "#ff0000" }}>is a BIG LOSER ?</b>
          </Text>
          <SizedBox width={12} />
          <Button
            auto
            className={montserrat.className}
            css={{
              background: "#ff0000",
              borderRadius: 5,
              fontSize: 16,
              width: 94,

              fontWeight: "bold",
            }}>
            Truth
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default WhyLoser;
