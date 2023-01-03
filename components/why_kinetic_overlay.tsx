"use client";
import { Button, Container, Text } from "@nextui-org/react";
import { montserrat } from "../pages/_app";
import SizedBox from "./sized_box";

const WhyKinetic = () => {
  return (
    <Container
      css={{
        maxWidth: 410,
        height: "auto",
        background: "rgba(249, 241, 241, 0.87)",

        margin: 0,

        borderRadius: 10,
        boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
        padding: 16,
      }}>
      <div style={{ display: "flex", width: "100%" }}>
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#000000",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          What&nbsp;
        </Text>{" "}
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#000000",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          is&nbsp;
        </Text>
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#8205E9",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          Kinetic&nbsp;
        </Text>
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#8205E9",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          Energy&nbsp;
        </Text>
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#8205E9",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          Storage&nbsp;
        </Text>
        <Text
          h3
          className={montserrat.className}
          css={{
            color: "#000000",
            fontSize: 22,
            "@media only screen and (max-width: 460px)": {
              fontSize: 18,
            },
          }}>
          ?
        </Text>
      </div>
      <SizedBox height={20} />
      <div>
        <Text
          h6
          className={montserrat.className}
          css={{ fontSize: 12, color: "#000000" }}>
          We can see solar panels are getting 100% exposure to the sun,
          that&apos;s why they get hot. Unfortunately, only 20% of that energy
          is making it to your system due to many limitations. The other 80%
          bleeds off and is a complete loss
        </Text>
        <SizedBox height={16} />
        <Text
          h6
          className={montserrat.className}
          css={{ fontSize: 12, color: "#000000" }}>
          Our system works by capturing the other 80% loss and storing it for
          use later in our GRAVOS kinetic storage system. Our Kinetic Storage
          allows you to access the energy 24/7 night or day / rain or shine.
        </Text>
        <SizedBox height={24} />
        <Text
          h6
          className={montserrat.className}
          css={{
            fontSize: 16,
            color: "#8205E9",
            "@media only screen and (max-width: 460px)": {
              fontSize: 14,
            },
          }}>
          Use Less than Half 1/2 the amount of Panels
        </Text>
        <SizedBox height={24} />
        <div style={{ display: "flex" }}>
          <Button
            auto
            className={montserrat.className}
            css={{
              background: "#8205E9",
              borderRadius: 5,
              fontSize: 16,
              width: 94,

              fontWeight: "bold",
            }}>
            More
          </Button>
          <SizedBox width={10} />
          <Button
            auto
            className={montserrat.className}
            css={{
              background: "#00C2FF",
              borderRadius: 5,
              fontSize: 16,

              fontWeight: "bold",
            }}>
            Free Consult
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default WhyKinetic;
