import { Button, Text } from "@nextui-org/react";
import { montserrat } from "../pages/_app";
import SizedBox from "./sized_box";

const WhyLoser = () => {
  return (
    <div style={{ display: "flex", margin: 0 }}>
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
        Why just having&nbsp;
      </Text>
      <Text
        h3
        className={montserrat.className}
        css={{
          color: "#FFE500",
          fontSize: 20,
          fontWeight: "bold",
          margin: "auto",
          "@media only screen and (max-width: 1200px)": {
            fontSize: 16,
          },
        }}>
        Solar&nbsp;
      </Text>
      <Text
        h3
        className={montserrat.className}
        css={{
          color: "#FF0000",
          fontSize: 20,
          fontWeight: "bold",
          margin: "auto",
          "@media only screen and (max-width: 1200px)": {
            fontSize: 16,
          },
        }}>
        is a BIG LOSER?
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
  );
};

export default WhyLoser;
