import { Container, Text, Row, Image } from "@nextui-org/react";
import Link from "next/link";

import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";
const MyNavBar = () => {
  return (
    <Row
      align='center'
      justify='space-between'
      css={{
        display: "flex",
        background: "white",
        paddingTop: 16,
        paddingBottom: 16,
      }}>
      <Container
        responsive={false}
        justify='flex-start'
        css={{ display: "flex", width: "fit-content", margin: 0 }}>
        <Link href={"#"}>
          <Image
            draggable={false}
            src='/gravos_logo.svg'
            alt='Gravos Logo'
            css={{
              margin: 0,
              height: 60,
              "@media only screen and (max-width: 400px)": {
                height: 45,
              },
            }}
          />
        </Link>
        <SizedBox width={16} />
        <Image
          draggable={false}
          src='/us_veteran.png'
          alt='U.S. Veteran'
          css={{
            margin: 0,
            height: 60,
            "@media only screen and (max-width: 400px)": {
              height: 45,
            },
          }}
        />
      </Container>

      <Text
        h5
        className={montserrat.className}
        css={{
          fontSize: 20,
          width: "fit-content",
          fontWeight: "700",
          marginRight: 16,
          "@media only screen and (max-width: 400px)": {
            fontSize: 16,
          },
        }}>
        Contact
      </Text>
    </Row>
  );
};
export default MyNavBar;
