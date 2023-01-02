"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { montserrat } from "./_app";
import { Text, Container, Image, Button, Row } from "@nextui-org/react";
import SizedBox from "../components/sized_box";
import React, { useState } from "react";
import HeaderText from "../components/header_text";
import WhyKinetic from "../components/why_kinetic_overlay";
import WhyLoser from "../components/why_loser";

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        background: "#00c2ff",
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
      }}>
      <Head>
        <title>Gravos</title>{" "}
      </Head>

      <div
        style={{
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
        }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: 0,
          }}>
          <HeaderText />
          <Image
            draggable={false}
            src='/us_veteran.png'
            alt='U.S. Veteran'
            objectFit='contain'
            css={{
              width: 150,
              margin: 0,
              zIndex: 0,
              padding: 0,
              display: "flex",
              "@media only screen and (max-width: 950px)": {
                display: "none",
              },
            }}
          />
        </div>

        <div style={{ margin: 0, padding: 0 }}>
          <Row
            justify='space-between'
            align='flex-start'
            css={{ position: "relative", top: 70 }}>
            <div
              style={{
                display: "flex",
                width: "40%",
                padding: 0,
                flexDirection: "column",
                position: "absolute",
                zIndex: 3,
                top: 100,
              }}>
              <Image
                draggable={false}
                src='/us_veteran.png'
                alt='U.S. Veteran'
                objectFit='contain'
                css={{
                  width: 150,
                  margin: 0,
                  zIndex: 0,
                  padding: 0,
                  display: "none",

                  "@media only screen and (min-width: 701px) and (max-width: 949px)":
                    {
                      display: "block",
                    },
                }}
              />
            </div>
            <Container
              css={{
                width: "auto",
                height: "auto",
                background: "rgba(0, 0, 0, 0.75)",

                flexDirection: "column",
                display: "flex",
                marginTop: 0,
                marginLeft: 20,
                marginRight: 0,
                marginBottom: 0,
                position: "absolute",
                zIndex: 3,
                top: 200,
                borderRadius: 10,
                boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
                padding: 12,
                "@media only screen and (max-width: 950px)": {
                  display: "none",
                },
              }}>
              <WhyLoser />
            </Container>
            <Container
              fluid
              css={{
                right: 20,
                position: "absolute",
                zIndex: 2,
                margin: 0,
                padding: 0,

                display: "flex",
                width: "fit-content",
                "@media only screen and (max-width: 700px)": {
                  position: "absolute",
                  margin: "auto",
                  display: "inline-flex",
                  left: 10,
                  padding: 16,

                  justifyContent: "center",
                },
                "@media only screen and (max-width: 360px)": {
                  left: 0,
                },
              }}>
              {" "}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  padding: 0,
                  margin: "auto",
                }}>
                <Image
                  draggable={false}
                  src='/us_veteran.png'
                  alt='U.S. Veteran'
                  objectFit='contain'
                  css={{
                    width: 150,
                    margin: "auto",
                    zIndex: 0,
                    padding: 0,
                    display: "none",
                    "@media only screen and  (max-width: 700px)": {
                      display: "flex",
                      marginBottom: 32,
                    },
                  }}
                />
              </div>
              <WhyKinetic />
            </Container>
          </Row>
          <Container
            css={{
              width: "auto",
              height: "auto",
              background: "rgba(0, 0, 0, 0.75)",

              flexDirection: "column",
              display: "none",
              marginTop: 0,
              marginLeft: 20,
              marginRight: 0,
              marginBottom: 0,
              position: "absolute",
              zIndex: 3,
              bottom: 0,
              borderRadius: 10,
              boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
              padding: 12,
              "@media only screen and (max-width: 950px)": {
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                width: "fit-content",
                flexDirection: "row",
              },
            }}>
            <Row justify='center' align='center'>
              <WhyLoser />
            </Row>
          </Container>
          <Image
            draggable={false}
            src='/house.png'
            alt='house'
            objectFit='cover'
            css={{
              width: "100%",
              margin: 0,
              zIndex: 0,
              padding: 0,
              display: "flex",

              height: 600,

              "@media only screen and (max-width: 500px)": {
                height: 600,
              },
            }}
          />

          <div
            style={{
              width: "100%",
              height: "auto",
              background: "black",
              margin: 0,
              padding: 16,
              bottom: 0,

              display: "flex",
            }}>
            <div
              style={{
                width: "100%",

                margin: "auto",
                height: "100%",

                justifyContent: "start",
                alignContent: "start",
              }}>
              <Text
                h3
                className={montserrat.className}
                css={{
                  fontSize: 20,
                  color: "white",
                  display: "flex",
                  width: "auto",
                  flexDirection: "column",
                  height: "auto",
                  margin: "auto",
                }}>
                Finally a Solar Energy System that Really Works.
              </Text>
              <SizedBox height={12} />
              <div
                style={{
                  width: "100%",

                  margin: "auto",
                  height: "100%",

                  justifyContent: "start",
                  alignContent: "start",
                }}>
                <Text
                  h3
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    color: "white",
                    display: "flex",
                    width: "auto",
                    flexDirection: "column",
                    height: "auto",
                    margin: "auto",
                  }}>
                  Learn How to Save 100% on your Power Bill
                </Text>
                <SizedBox height={16} />
                <Row>
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
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignContent: "end",
                alignItems: "center",
              }}>
              <Image src='/info_1.svg' alt='EV Charging' width={130} />
              <SizedBox width={10} />
              <Image src='/info_2.svg' alt='EV Charging' width={83} />
              <SizedBox width={10} />
              <Image src='/info_3.svg' alt='EV Charging' width={134} />
              <SizedBox width={10} />
              <Image src='/info_4.svg' alt='EV Charging' width={92} />
              <SizedBox width={10} />
              <Image src='/info_5.svg' alt='EV Charging' width={92} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image
          draggable={false}
          src='/hero_2.png'
          alt='lightning'
          objectFit='cover'
          // autoResize={true}
          css={{
            width: "100%",
            margin: 0,
            zIndex: 0,
            padding: 0,
            display: "flex",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "black",
          margin: 0,
          padding: 16,
          bottom: 0,

          zIndex: 3,
          display: "flex",
        }}>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Image src='/info_6.svg' alt='EV Charging' height={80} />
          <SizedBox width={10} />
          <Image src='/info_7.svg' alt='EV Charging' height={62} />
          <SizedBox width={10} />
          <Image src='/info_8.svg' alt='EV Charging' height={60} />
          <SizedBox width={10} />
          <Image src='/info_9.svg' alt='EV Charging' height={64} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 0,
          paddingTop: 48,
          paddingBottom: 48,
          bottom: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        <div
          style={{
            display: "block",

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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Access Power in Any Weather and Situation
          </Text>
          <SizedBox height={16} />
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
          </div>
        </div>
        <div>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              maxWidth: 500,
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Our system has an integrated Kinetic and battery system that stores
            80% of your solar energy for backup protection, so when the grid
            goes down your power stays on. Your system detects outages and
            automatically continues power output running your home for
            days/weeks/months.
          </Text>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image
          draggable={false}
          src='/hero_3.jpg'
          alt='lightning'
          objectFit='cover'
          css={{
            width: "100%",
            margin: 0,
            zIndex: 0,
            padding: 0,
            display: "flex",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "black",
          margin: 0,
          padding: 16,
          bottom: 0,

          zIndex: 3,
          display: "flex",
        }}>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Image src='/info_10.svg' alt='EV Charging' height={80} />
          <SizedBox width={10} />
          <Image src='/info_11.svg' alt='EV Charging' height={62} />
          <SizedBox width={10} />
          <Image src='/info_12.svg' alt='EV Charging' height={60} />
          <SizedBox width={10} />
          <Image src='/info_9.svg' alt='EV Charging' height={64} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 48,
          paddingBottom: 48,
          bottom: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        <div
          style={{
            display: "block",

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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Constant Power & Backup for 20+ years
          </Text>
          <SizedBox height={16} />
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
          </div>
        </div>
        <div>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              maxWidth: 500,
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Our Kinetic Storage System keeps releasing power for
            days/weeks/months long after your neighbors solar systems and
            batteries fail.
          </Text>
        </div>
      </div>

      <div style={{ position: "relative", background: "white" }}>
        <Row justify='flex-start' align='center' css={{ padding: 32 }}>
          <div>
            <Image
              draggable={false}
              src='/gravos_logo.svg'
              alt='lightning'
              objectFit='cover'
              css={{
                width: 200,
                zIndex: 0,
                margin: 0,
                padding: 0,
              }}
            />
            <Row justify='flex-end'>
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
            </Row>
          </div>
          <Image
            draggable={false}
            src='/gravos_pro.svg'
            alt='lightning'
            objectFit='cover'
            css={{
              width: "100%",
              zIndex: 0,
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          />
        </Row>
        <Row
          justify='flex-start'
          align='center'
          css={{ paddingLeft: 32, paddingRight: 32 }}>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 50,
              fontWeight: "bold",
              color: "black",
              display: "flex",
              maxWidth: 500,
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            VS
          </Text>

          <div style={{ background: "black", height: 2, width: "90%" }}></div>
        </Row>
        <Row
          justify='flex-start'
          align='center'
          css={{ paddingLeft: 32, paddingRight: 32 }}>
          <div>
            <Image
              draggable={false}
              src='/conv_black.svg'
              alt='lightning'
              objectFit='cover'
              css={{
                width: 200,
                zIndex: 0,
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <Image
            draggable={false}
            src='/conv_pro.svg'
            alt='lightning'
            objectFit='cover'
            css={{
              width: "100%",
              zIndex: 0,
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          />
        </Row>
      </div>

      <div style={{ position: "relative", background: "black" }}>
        <Image
          draggable={false}
          src='/c_cost.svg'
          alt='lightning'
          objectFit='cover'
          css={{
            width: "100%",
            zIndex: 0,
            margin: 0,
            padding: 0,
          }}
        />
        {/* <Row justify='flex-start' align='center' css={{ padding: 32 }}>
          <div>
            <Image
              draggable={false}
              src='/conv_white.svg'
              alt='lightning'
              objectFit='cover'
              css={{
                width: 200,
                zIndex: 0,
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <Image
            draggable={false}
            src='/conv_cost.svg'
            alt='lightning'
            objectFit='cover'
            css={{
              width: "100%",
              zIndex: 0,
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          />
        </Row>
        <Row>
          <div style={{ background: "white", height: 2, width: "100%" }}></div>
        </Row>
        <SizedBox height={16} />
        <Row justify='flex-end' align='center' css={{ display: "flex" }}>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Cost Over 20 Years =&nbsp;
          </Text>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "semibold",
              color: "#ff0000",
              display: "flex",

              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            -$80,000 - $120,000
          </Text>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "semibold",
              color: "white",
              display: "flex",

              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            + Utility&nbsp;
          </Text>
          <Text
            h3
            className={montserrat.className}
            css={{
              fontSize: 24,
              fontWeight: "semibold",
              color: "#ff0000",
              display: "flex",

              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Loss
          </Text>
          <SizedBox width={32} />
        </Row>
        <SizedBox height={16} /> */}
      </div>

      <div style={{ position: "relative", background: "#F6F6F6" }}>
        <Image
          draggable={false}
          src='/g_cost.svg'
          alt='lightning'
          objectFit='cover'
          css={{
            width: "100%",
            zIndex: 0,
            margin: 0,
            padding: 0,
          }}
        />
        {/* <Row justify='flex-start' align='center' css={{ padding: 32 }}>
          <div>
            <Image
              draggable={false}
              src='/gravos_20_year.svg'
              alt='lightning'
              objectFit='cover'
              css={{
                width: 200,
                zIndex: 0,
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <Image
            draggable={false}
            src='/gravos_cost.svg'
            alt='lightning'
            objectFit='cover'
            css={{
              width: "100%",
              zIndex: 0,
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          />
        </Row> */}
      </div>
      <Container
        xs
        style={{
          background: "#00c2ff",
          padding: 32,
        }}>
        <Text
          h4
          className={montserrat.className}
          css={{
            fontSize: 24,
            fontWeight: "semibold",
            color: "white",
            display: "flex",

            flexDirection: "column",
            height: "auto",
            margin: 0,
          }}>
          Household Incentives and Tax Credits
        </Text>
        <SizedBox height={4} />
        <Text
          h6
          className={montserrat.className}
          css={{
            fontSize: 16,
            fontWeight: "normal",
            color: "white",
            display: "flex",

            flexDirection: "column",
            height: "auto",
            margin: 0,
          }}>
          Starting 2023
        </Text>{" "}
        <SizedBox height={16} />
        <div style={{ background: "white", width: "100%", height: 2 }}></div>
        <SizedBox height={32} />
        <Text
          h4
          className={montserrat.className}
          css={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            display: "flex",

            flexDirection: "column",
            height: "auto",
            margin: 0,
          }}>
          Tax Credits
        </Text>
        <SizedBox height={10} />
        <Row justify='space-between'>
          {" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Item
          </Text>{" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Amount
          </Text>
        </Row>
        <SizedBox height={10} />
        <div
          style={{ background: "white", width: "100%", height: 2 }}></div>{" "}
        <SizedBox height={10} />
        <Row justify='space-between'>
          {" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Solar System Installation
          </Text>{" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            30% Full Returned Credit
          </Text>
        </Row>
        <SizedBox height={10} />
        <div
          style={{ background: "white", width: "100%", height: 2 }}></div>{" "}
        <SizedBox height={10} />
        <Row justify='space-between'>
          {" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Battery System Installation
          </Text>{" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Included
          </Text>
        </Row>
        <SizedBox height={10} />
        <div
          style={{ background: "white", width: "100%", height: 2 }}></div>{" "}
        <SizedBox height={10} />
        <Row justify='space-between'>
          {" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            Wiring Upgrade For Heat Pump / AC
          </Text>{" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            $4,000
          </Text>
        </Row>
        <SizedBox height={10} />
        <div
          style={{ background: "white", width: "100%", height: 2 }}></div>{" "}
        <SizedBox height={10} />
        <Row justify='space-between'>
          {" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            New Heat Pump / AC Install
          </Text>{" "}
          <Text
            h4
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "$semibold",
              color: "white",
              display: "flex",

              flexDirection: "column",
              height: "auto",
              margin: 0,
            }}>
            $4,000 - $8,000
          </Text>
        </Row>
        <SizedBox height={10} />
        <div
          style={{ background: "white", width: "100%", height: 2 }}></div>{" "}
        <SizedBox height={10} />
      </Container>
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

      <div
        style={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 48,
          paddingBottom: 48,
          bottom: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        <div
          style={{
            display: "block",

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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Kinetic Energy System
          </Text>
          <SizedBox height={16} />
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
          </div>
        </div>
        <div>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              maxWidth: 500,
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Our system has an integrated Kinetic and battery system that stores
            80% of your solar energy. Additionally the system produces power
            independently. This is the only system on the market that works with
            solar to match the demand of the grid connection to you home. Gravos
            system has a duty cycle on 30+ years. True Grid independence.
          </Text>
        </div>
      </div>

      <div style={{ position: "relative", background: "#fed600" }}>
        <SizedBox height={24} />
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
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          background: "white",
          margin: "auto",
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 48,
          paddingBottom: 48,
          bottom: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        <div
          style={{
            display: "block",

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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Mobile Monitoring App
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
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Coming Soon
          </Text>
          <SizedBox height={16} />
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
          </div>
        </div>
        <div>
          <Text
            h6
            className={montserrat.className}
            css={{
              fontSize: 14,
              fontWeight: "semibold",
              color: "black",
              display: "flex",
              maxWidth: 500,
              width: "auto",
              flexDirection: "column",
              height: "auto",
              margin: "auto",
            }}>
            Our system has a Mobile App coming soon.
          </Text>
        </div>
      </div>

      <div style={{ background: "black", paddingTop: 64 }}>
        <Row justify='center' align='center'>
          <div style={{ width: "40%" }}>
            <Image
              draggable={false}
              src='/solar.png'
              alt='lightning'
              objectFit='cover'
              css={{
                width: "100%",
                zIndex: 0,
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <div
            style={{ width: "60%", justifyContent: "center", margin: "auto" }}>
            <Row justify='center'>
              <Text
                h6
                className={montserrat.className}
                css={{
                  fontSize: 24,
                  fontWeight: "semibold",
                  color: "white",
                  display: "flex",

                  flexDirection: "column",
                  height: "auto",
                  margin: 0,
                }}>
                Solar Panel&nbsp;
              </Text>
              <Text
                h6
                className={montserrat.className}
                css={{
                  fontSize: 24,
                  fontWeight: "normal",
                  color: "white",
                  display: "flex",

                  flexDirection: "column",
                  height: "auto",
                  margin: 0,
                }}>
                Specs
              </Text>
            </Row>
            <SizedBox height={64} />
            <Row justify='center'>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Wattage
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  400w
                </Text>
              </div>{" "}
              <div style={{ width: "5%" }}></div>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Certifications
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  IEC / UL 61730, CEC Listed, IEC 61215
                </Text>
              </div>
            </Row>
            <SizedBox height={32} />
            <Row justify='center'>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Operating Temperature
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  -40°F up to +185°F
                </Text>
              </div>
              <div style={{ width: "5%" }}></div>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Inverter Power
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  3.8kW / 7.6kW
                </Text>{" "}
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  {" "}
                  97.5% efficiency
                </Text>
              </div>
            </Row>
            <SizedBox height={32} />
            <Row justify='center'>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Dimensions
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  74.4&quot; x 41.2&quot; x 1.57&quot; (including frame)
                </Text>
              </div>
              <div style={{ width: "5%" }}></div>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Inverter Dimensions
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  26&quot; x 16&quot; x 6&quot;
                </Text>{" "}
              </div>
            </Row>
            <SizedBox height={32} />
            <Row justify='center'>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Design
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Black anodized aluminum alloy frame Black solar cells and
                  backsheet
                </Text>
              </div>
              <div style={{ width: "5%" }}></div>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Inverter Warranty
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  12.5 years
                </Text>{" "}
              </div>
            </Row>
            <SizedBox height={32} />
            <Row justify='center'>
              <div style={{ width: "25%" }}>
                <div
                  style={{
                    height: 2,
                    background: "#777777",
                    width: 50,
                  }}></div>
                <SizedBox height={10} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "semibold",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  Warranty
                </Text>
                <SizedBox height={4} />
                <Text
                  h6
                  className={montserrat.className}
                  css={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "white",
                    display: "flex",

                    flexDirection: "column",
                    height: "auto",
                    margin: 0,
                  }}>
                  25-year performance guarantee
                </Text>
              </div>
              <div style={{ width: "5%" }}></div>
              <div style={{ width: "25%" }}></div>
            </Row>{" "}
            <SizedBox height={32} />
            <Row justify='center'>
              <Text
                h6
                className={montserrat.className}
                css={{
                  fontSize: 14,
                  fontWeight: "normal",
                  color: "white",
                  display: "flex",

                  flexDirection: "column",
                  height: "auto",
                  margin: 0,
                }}>
                *Modules shown may be different than those included in final
                design.
              </Text>
            </Row>
          </div>
        </Row>
        <SizedBox height={100} />
      </div>
    </div>
  );
}
