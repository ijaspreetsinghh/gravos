"use client";
import { Container, Row, Image, Text } from "@nextui-org/react";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const Comparison = () => {
  return (
    <div
      style={{
        background: "white",
      }}>
      <Container
        responsive={false}
        justify='center'
        css={{
          background: "white",
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

        <Row
          justify='center'
          css={{
            display: "flex",
            margin: 0,
            padding: 0,
            "@media only screen and (max-width: 950px)": {
              display: "block",
              margin: "auto",
              width: "100%",
            },
          }}>
          <div>
            <Image src='/gravos_20_year.svg' alt='Gravos' height={130} />
            <SizedBox height={20} />
            <Container
              responsive={false}
              css={{
                border: "5px solid #7F21E3",
                width: "100%",
                marginRight: 8,
                "@media only screen and (max-width: 950px)": {
                  margin: 0,
                },
              }}>
              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Energy Produced & Power Demand VS Utility Cost
              </Text>
              <SizedBox height={20} />
              <Image src='/g_production.svg' alt='Gravos Production' />
              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Summary
              </Text>
              <SizedBox height={28} />

              <Image
                src='/g_production_summary.svg'
                alt='Gravos Production Summary'
                objectFit='contain'
                css={{
                  height: 200,
                  margin: 0,
                  padding: 0,
                }}
              />

              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                System Cost & Loan
              </Text>
              <SizedBox height={20} />
              <Image src='/g_cost.svg' alt='Gravos Cost' />
              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Summary
              </Text>
              <SizedBox height={20} />

              <Image
                src='/g_cost_summary.svg'
                alt='Gravos Cost Summary'
                objectFit='contain'
                css={{
                  height: 200,
                  margin: 0,
                  padding: 0,
                }}
              />
            </Container>
          </div>
          <Container
            css={{
              display: "none",
              "@media only screen and (max-width: 950px)": {
                height: 50,
                display: "block",
              },
            }}></Container>
          <div>
            <Image
              src='/conv_black.svg'
              alt='Conventional Solar Panel'
              height={130}
            />
            <SizedBox height={20} />
            <Container
              responsive={false}
              css={{
                border: "5px solid #FF9900",
                width: "100%",
                marginLeft: 8,
                "@media only screen and (max-width: 950px)": {
                  margin: 0,
                },
              }}>
              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Energy Produced & Power Demand VS Utility Cost
              </Text>
              <SizedBox height={20} />
              <Image
                src='/c_production.svg'
                alt='Conventional Solar Panel Production'
              />
              <SizedBox height={28} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Summary
              </Text>
              <SizedBox height={20} />
              <Image
                src='/c_production_summary.svg'
                alt='Conventional Solar Panel Production Summary'
                objectFit='contain'
                css={{
                  height: 200,
                  margin: 0,
                  padding: 0,
                }}
              />

              <SizedBox height={20} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                System Cost & Loan
              </Text>
              <SizedBox height={20} />
              <Image src='/c_cost.svg' alt='Conventional Solar Panel Cost' />
              <SizedBox height={28} />
              <Text
                h3
                className={montserrat.className}
                color='black'
                css={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                Summary
              </Text>
              <SizedBox height={20} />
              <Image
                src='/c_cost_summary.svg'
                alt='Conventional Solar Panel Cost Summary'
                objectFit='contain'
                css={{
                  height: 200,
                  margin: 0,
                  padding: 0,
                }}
              />
            </Container>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Comparison;
