"use client";
import { Container, Image } from "@nextui-org/react";
const SectionThree = () => {
  return (
    <div style={{ position: "relative", background: "black" }}>
      {" "}
      <Container
        responsive={false}
        justify='center'
        css={{
          display: "flex",
          margin: 0,

          justifyContent: "center",
          padding: 20,
          alignContent: "center",
          background: "rgba(14,14,14,.7)",
          alignItems: "center",
          position: "absolute",
          zIndex: 2,
          bottom: 0,
          width: "100%",
          "@media only screen and (max-width: 610px)": {
            display: "flex",

            height: 440,

            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}>
        <Image src='/info_10.svg' alt='EV Charging' height={80} />

        <Image src='/info_11.svg' alt='EV Charging' height={62} />

        <Image src='/info_12.svg' alt='EV Charging' height={60} />

        <Image src='/info_9.svg' alt='EV Charging' height={64} />
      </Container>
      <Image
        draggable={false}
        src='/hero_3.jpg'
        alt='lightning'
        objectFit='cover'
        // autoResize={true}
        css={{
          width: "100%",
          margin: 0,
          zIndex: 0,
          height: 440,
          padding: 0,
          display: "flex",
        }}
      />
    </div>
  );
};
export default SectionThree;
