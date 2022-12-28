"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { montserrat } from "./_app";
import { Text, Container, Image, Button, Row } from "@nextui-org/react";
import SizedBox from "../components/sized_box";
export default function Home() {
  return (
    <div
      style={{
        background: "#00c2ff",
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
      }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
        }}>
        <Container fluid css={{ display: "flex", width: "100%" }}>
          <div style={{ padding: 0, paddingTop: 48, paddingLeft: 48 }}>
            <Text h1 className={montserrat.className} css={{ fontSize: 64 }}>
              The Future in
            </Text>
            <Text
              h1
              className={montserrat.className}
              css={{ fontSize: 64, color: "white" }}>
              Renewable Energy
            </Text>
            <Row css={{ display: "flex", margin: 0, padding: 0 }}>
              <Text h1 className={montserrat.className} css={{ fontSize: 64 }}>
                Beyond Just&nbsp;
              </Text>
              <Text
                h1
                className={montserrat.className}
                css={{ fontSize: 64, color: "#ffe500" }}>
                Solar
              </Text>
            </Row>
          </div>
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
            }}
          />
        </Container>

        <div>
          <Container
            css={{
              width: "auto",
              height: "auto",
              background: "rgba(0, 0, 0, 0.75)",
              left: 20,
              flexDirection: "column",
              display: "flex",
              margin: "auto",
              position: "absolute",
              zIndex: 2,
              top: "67%",
              borderRadius: 10,
              boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
              padding: 12,
            }}>
            <div style={{ display: "flex", margin: "auto" }}>
              <Text
                h3
                className={montserrat.className}
                css={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  flexDirection: "column",
                  display: "flex",
                  margin: "auto",
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
                  flexDirection: "column",
                  display: "flex",
                  margin: "auto",
                }}>
                Solar
              </Text>
              <Text
                h3
                className={montserrat.className}
                css={{
                  color: "#FF0000",
                  fontSize: 20,
                  fontWeight: "bold",
                  flexDirection: "column",
                  display: "flex",
                  margin: "auto",
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
          </Container>
          <Container
            css={{
              maxWidth: 410,
              height: "auto",
              background: "rgba(249, 241, 241, 0.87)",
              right: 20,

              position: "absolute",
              zIndex: 2,
              borderRadius: 10,
              boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
              padding: 16,
            }}>
            <div style={{ display: "flex" }}>
              <Text
                h3
                className={montserrat.className}
                css={{ color: "#000000", fontSize: 22 }}>
                What is&nbsp;
              </Text>
              <Text
                h3
                className={montserrat.className}
                css={{ color: "#8205E9", fontSize: 22 }}>
                Kinetic Energy Storage
              </Text>
              <Text
                h3
                className={montserrat.className}
                css={{ color: "#000000", fontSize: 22 }}>
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
                that&apos;s why they get hot. Unfortunately, only 20% of that
                energy is making it to your system due to many limitations. The
                other 80% bleeds off and is a complete loss
              </Text>
              <SizedBox height={16} />
              <Text
                h6
                className={montserrat.className}
                css={{ fontSize: 12, color: "#000000" }}>
                Our system works by capturing the other 80% loss and storing it
                for use later in our GRAVOS kinetic storage system. Our Kinetic
                Storage allows you to access the energy 24/7 night or day / rain
                or shine.
              </Text>
              <SizedBox height={24} />
              <Text
                h6
                className={montserrat.className}
                css={{ fontSize: 16, color: "#8205E9" }}>
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
          <Image
            draggable={false}
            src='/house.png'
            alt='house'
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
      </div>

      <div>
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
    </div>
  );
}
