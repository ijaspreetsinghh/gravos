"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { montserrat } from "./_app";
import { Text, Container, Image, Button, Row, Grid } from "@nextui-org/react";
import SizedBox from "../components/sized_box";
import React, { useState } from "react";
import HeaderText from "../components/header_text";
import WhyKinetic from "../components/why_kinetic_overlay";
import WhyLoser from "../components/why_loser";
import OfferImage from "../components/offer_image";
import HeaderSection from "../components/sections/section_1";
import PropertiesOne from "../components/properties/properties_1";
import SectionTwo from "../components/sections/setion_2";
import SectionThree from "../components/sections/section_3";
import Comparison from "../components/sections/comparison";
import TaxCredits from "../components/sections/tax_credits";
import AppSnapshots from "../components/sections/app_snapshots";
import PanelDetails from "../components/sections/panel_details";

export default function Home() {
  const [index, setIndex] = useState(0);

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
            80% Captured by Gravos Kinetic Storage
          </Text>
          <SizedBox height={20} />
          <Image
            src='/capacity.svg'
            alt='Gravos Capacity'
            css={{
              "@media only screen and (max-width: 450px)": {
                paddingLeft: 8,
                paddingRight: 8,
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
        <div style={{ position: "relative", background: "black" }}>
          <Image
            draggable={false}
            src={`/project_${index + 1}.png`}
            alt='lightning'
            objectFit='cover'
            css={{
              width: "100%",
              maxWidth: 800,
              transition: "ease",
              zIndex: 0,
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          />
        </div>
        <SizedBox height={32} />
        <Row align='flex-end'>
          <div
            style={{
              width: "calc(100%/5)",
              // maxWidth: 350,
              height: index == 0 ? 5 : 2,
              background: index == 0 ? "#cd00ee" : "#777777",
            }}></div>

          <div
            style={{
              width: "calc(100%/5)",
              // maxWidth: 250,
              height: index == 1 ? 5 : 2,
              background: index == 1 ? "#cd00ee" : "#777777",
            }}></div>
          <div
            style={{
              width: "calc(100%/5)",
              // maxWidth: 250,
              height: index == 2 ? 5 : 2,
              background: index == 2 ? "#cd00ee" : "#777777",
            }}></div>
          <div
            style={{
              width: "calc(100%/5)",
              // maxWidth: 250,
              height: index == 3 ? 5 : 2,
              background: index == 3 ? "#cd00ee" : "#777777",
            }}></div>
          <div
            style={{
              width: "calc(100%/5)",
              // maxWidth: 250,
              height: index == 4 ? 5 : 2,
              background: index == 4 ? "#cd00ee" : "#777777",
            }}></div>
        </Row>
        <SizedBox height={10} />
        <Row justify='space-between'>
          <div
            style={{
              width: "calc(100%/5)",
              maxWidth: 250,
              cursor: "pointer",
              height: "auto",
            }}
            onClick={() => {
              setIndex(0);
            }}>
            <Text
              className={montserrat.className}
              css={{
                fontSize: 14,
                color: index == 0 ? "white" : "#4F4F4F",
                fontWeight: "bold",
              }}>
              Powerful Enough to run Everything you are used to at the same time
              just like being grid connected
            </Text>
          </div>

          <div
            style={{
              width: "calc(100%/5)",
              maxWidth: 250,
              cursor: "pointer",
              height: "auto",
            }}
            onClick={() => {
              setIndex(1);
            }}>
            <Text
              className={montserrat.className}
              css={{
                fontSize: 14,
                color: index == 1 ? "white" : "#4F4F4F",
                fontWeight: "bold",
              }}>
              Power AC, Pools, and Charge your EV with out worries off grid
            </Text>
          </div>

          <div
            style={{
              width: "calc(100%/5)",
              maxWidth: 250,
              cursor: "pointer",
              height: "auto",
            }}
            onClick={() => {
              setIndex(2);
            }}>
            <Text
              className={montserrat.className}
              css={{
                fontSize: 14,
                color: index == 2 ? "white" : "#4F4F4F",
                fontWeight: "bold",
              }}>
              Generate power with out solar any time in any weather and off Grid
            </Text>
          </div>

          <div
            style={{
              width: "calc(100%/5)",
              maxWidth: 250,
              cursor: "pointer",
              height: "auto",
            }}
            onClick={() => {
              setIndex(3);
            }}>
            <Text
              className={montserrat.className}
              css={{
                fontSize: 14,
                color: index == 3 ? "white" : "#4F4F4F",
                fontWeight: "bold",
              }}>
              Capture 100% efficiency of the sun
            </Text>
          </div>

          <div
            style={{
              width: "calc(100%/5)",
              maxWidth: 250,
              cursor: "pointer",
              height: "auto",
            }}
            onClick={() => {
              setIndex(4);
            }}>
            <Text
              className={montserrat.className}
              css={{
                fontSize: 14,
                color: index == 4 ? "white" : "#4F4F4F",
                fontWeight: "bold",
              }}>
              Maximize Utility Benefits
            </Text>
          </div>
        </Row>
      </div>
      <div style={{ position: "relative", background: "white" }}>
        <Image
          draggable={false}
          src='/demo.svg'
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
