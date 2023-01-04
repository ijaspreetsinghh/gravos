"use client";
import Head from "next/head";
import { montserrat } from "./_app";
import { Text, Container, Image, Button, Row } from "@nextui-org/react";
import SizedBox from "../components/sized_box";
import React from "react";
import HeaderSection from "../components/sections/section_1";
import PropertiesOne from "../components/properties/properties_1";
import SectionTwo from "../components/sections/setion_2";
import SectionThree from "../components/sections/section_3";
import Comparison from "../components/sections/comparison";
import TaxCredits from "../components/sections/tax_credits";
import AppSnapshots from "../components/sections/app_snapshots";
import PanelDetails from "../components/sections/panel_details";
import MyNavBar from "../components/sections/navbar";
import SliderPros from "../components/sections/slider_pros";

export default function Home() {
  return (
    <div
      style={{
        background: "white",
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
      }}>
      <Head>
        <title>Gravos</title>
      </Head>
      <MyNavBar />
      <HeaderSection />
      <Row
        align='center'
        justify='center'
        css={{ background: "black", display: "flex" }}>
        <PropertiesOne />
      </Row>
      <SectionTwo />
      <Container
        md
        wrap={"wrap"}
        css={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 0,
          paddingTop: 48,
          paddingBottom: 48,

          display: "flex",
          justifyContent: "space-evenly",
          "@media only screen and (max-width: 1000px)": {
            display: "block",
            width: "fit-content",
          },
        }}>
        <div
          // responsive={false}

          style={{
            display: "block",
            width: "",
            margin: 0,
            padding: 0,
            justifyContent: "start",
            alignContent: "start",
            alignItems: "start",
          }}>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              width: "fit-content",
              margin: 0,
              flexDirection: "column",
              height: "auto",
            }}>
            Security
          </Text>
          <SizedBox height={8} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              display: "flex",
              width: "fit-content",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Access Power in Any Weather and Situation
          </Text>
          <SizedBox height={16} />
          <Row wrap='wrap' css={{ display: "flex", width: "fit-content" }}>
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
              Get
            </Button>
            <SizedBox width={24} />
            <Button
              auto
              className={montserrat.className}
              css={{
                background: "#00C2FF",
                borderRadius: 5,
                fontSize: 16,
                width: 94,

                fontWeight: "bold",
              }}>
              FREE CONSULT
            </Button>
          </Row>
        </div>

        <Text
          h6
          className={montserrat.className}
          css={{
            width: "fit-content",
            fontSize: 14,
            fontWeight: "semibold",
            color: "black",
            display: "flex",
            maxWidth: 500,

            flexDirection: "column",
            height: "auto",
            margin: "auto",
            "@media only screen and (max-width: 1000px)": {
              marginTop: 30,
            },
          }}>
          Our system has an integrated Kinetic and battery system that stores
          80% of your solar energy for backup protection, so when the grid goes
          down your power stays on. Your system detects outages and
          automatically continues power output running your home for
          days/weeks/months.
        </Text>
      </Container>
      <SectionThree />
      <Container
        md
        wrap={"wrap"}
        css={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 0,
          paddingTop: 48,
          paddingBottom: 48,

          display: "flex",
          justifyContent: "space-evenly",
          "@media only screen and (max-width: 1000px)": {
            display: "block",
            width: "fit-content",
          },
        }}>
        <div
          // responsive={false}

          style={{
            display: "block",
            width: "",
            margin: 0,
            padding: 0,
            justifyContent: "start",
            alignContent: "start",
            alignItems: "start",
          }}>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              width: "fit-content",
              margin: 0,
              flexDirection: "column",
              height: "auto",
            }}>
            Ultimate Solution
          </Text>
          <SizedBox height={8} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              display: "flex",
              width: "fit-content",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Constant Power & Backup for 20+ years
          </Text>
          <SizedBox height={16} />
          <Row wrap='wrap' css={{ display: "flex", width: "fit-content" }}>
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
              Get
            </Button>
            <SizedBox width={24} />
            <Button
              auto
              className={montserrat.className}
              css={{
                background: "#00C2FF",
                borderRadius: 5,
                fontSize: 16,
                width: 94,

                fontWeight: "bold",
              }}>
              FREE CONSULT
            </Button>
          </Row>
        </div>

        <Text
          h6
          className={montserrat.className}
          css={{
            width: "fit-content",
            fontSize: 14,
            fontWeight: "semibold",
            color: "black",
            display: "flex",
            maxWidth: 500,

            flexDirection: "column",
            height: "auto",
            margin: "auto",
            "@media only screen and (max-width: 1000px)": {
              marginTop: 30,
            },
          }}>
          Our Kinetic Storage System keeps releasing power for days/weeks/months
          long after your neighbors solar systems and batteries fail.
        </Text>
      </Container>
      <div
        style={{
          background: "#1D1D1D",
        }}>
        <Container
          justify='center'
          css={{
            background: "#1D1D1D",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 32,
            paddingBottom: 32,

            "@media only screen and (max-width: 450px)": {
              paddingLeft: 8,
              paddingRight: 8,
            },
          }}>
          <Text
            h3
            className={montserrat.className}
            color='white'
            css={{ fontSize: 20, textAlign: "center" }}>
            Kinetic Systems Make a Difference & 80% More Power Over Solar Alone
          </Text>
          <SizedBox height={20} />
          <Image
            src='/capacity.svg'
            alt='Gravos Capacity'
            css={{
              height: 199,
              "@media only screen and (max-width: 450px)": {
                paddingLeft: 8,
                paddingRight: 8,
                height: 170,
              },
            }}
          />
        </Container>
      </div>
      <Comparison />
      <TaxCredits />
      <div
        style={{
          position: "relative",
          background: "black",
          padding: 32,
        }}>
        <SliderPros />
      </div>
      <div style={{ position: "relative", background: "white" }}>
        <SizedBox height={30} />
        <Image
          draggable={false}
          src='/demo.jpg'
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
      </div>
      <Container
        md
        wrap={"wrap"}
        css={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 0,
          paddingTop: 48,
          paddingBottom: 48,

          display: "flex",
          justifyContent: "space-evenly",
          "@media only screen and (max-width: 1000px)": {
            display: "block",
            width: "fit-content",
          },
        }}>
        <div
          // responsive={false}

          style={{
            display: "block",
            width: "",
            margin: 0,
            padding: 0,
            justifyContent: "start",
            alignContent: "start",
            alignItems: "start",
          }}>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              width: "fit-content",
              margin: 0,
              flexDirection: "column",
              height: "auto",
            }}>
            Cutting Edge Technology in Power Production & Storage
          </Text>
          <SizedBox height={8} />
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              display: "flex",
              width: "fit-content",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Kinetic Energy System
          </Text>
          <SizedBox height={16} />
          <Row wrap='wrap' css={{ display: "flex", width: "fit-content" }}>
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
              Get
            </Button>
            <SizedBox width={24} />
            <Button
              auto
              className={montserrat.className}
              css={{
                background: "#00C2FF",
                borderRadius: 5,
                fontSize: 16,
                width: 94,

                fontWeight: "bold",
              }}>
              FREE CONSULT
            </Button>
          </Row>
        </div>

        <Text
          h6
          className={montserrat.className}
          css={{
            width: "fit-content",
            fontSize: 14,
            fontWeight: "semibold",
            color: "black",
            display: "flex",
            maxWidth: 500,

            flexDirection: "column",
            height: "auto",
            margin: "auto",
            "@media only screen and (max-width: 1000px)": {
              marginTop: 30,
            },
          }}>
          Our system has an integrated Kinetic and battery system that stores
          80% of your solar energy. Additionally the system produces power
          independently. This is the only system on the market that works with
          solar to match the demand of the grid connection to you home. Gravos
          system has a duty cycle on 30+ years. True Grid independence.
        </Text>
      </Container>
      <PanelDetails />
      <AppSnapshots />
    </div>
  );
}
