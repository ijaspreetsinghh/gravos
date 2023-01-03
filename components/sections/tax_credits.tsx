"use client";
import { Container, Row, Text, Button } from "@nextui-org/react";
import Link from "next/link";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const TaxCredits = () => {
  return (
    <div style={{ background: "#00c2ff" }}>
      <Row
        css={{
          display: "flex",
          "@media only screen and (max-width: 950px)": {
            display: "block",
          },
        }}>
        <Container
          xs
          css={{
            background: "#00c2ff",
            padding: 32,
            height: 500,

            "@media only screen and (max-width: 950px)": {
              height: "auto",
            },
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
          </Text>
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
            </Text>
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
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
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
            </Text>
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
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
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
            </Text>
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
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
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
            </Text>
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
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={10} />
          <Row justify='space-between'>
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
            </Text>
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
          </Row>{" "}
          <SizedBox height={10} />
          <div style={{ background: "white", width: "100%", height: 2 }}></div>
          <SizedBox height={20} />
          <Row justify='center'>
            <Link
              href={"https://www.irs.gov/pub/taxpros/fs-2022-40.pdf"}
              target={"_blank"}>
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
                Download IRS Fact Sheet
              </Button>
            </Link>
          </Row>
          <SizedBox height={10} />
        </Container>{" "}
        <div style={{ background: "#00c2ff", padding: 10 }}>
          <Container
            responsive={false}
            css={{
              background: "white",
              padding: 32,
              height: 360,
              marginTop: 20,
              marginRight: 20,
              overflow: "scroll",
              "@media only screen and (max-width: 1000px)": {
                margin: "auto",
              },
            }}>
            <Text
              h6
              className={montserrat.className}
              css={{
                fontSize: 12,
                fontWeight: "500",
                color: "black",
                display: "flex",

                flexDirection: "column",
                height: "auto",
                margin: 0,
              }}>
              In 2023
              <br /> Households can receive a tax credit to cover 30% of the
              costs of installing rooftop solar.
              <li>
                This credit applies to solar systems that are paired with
                battery storage as well as standalone battery storage installed
                without solar.
                <br />
                <Link
                  href={
                    "https://www.energy.gov/eere/solar/solar-energy-resources-consumers"
                  }
                  style={{ textDecoration: "underline" }}>
                  Learn more about how to install solar on your home and access
                  other solar.
                </Link>
              </li>
              <br />
              The Inflation Reduction Act will help more Americans harness the
              sun&apos;s energy to power their homes with clean electricity and
              save big on utility bills. Tax credits are available now to cover
              up to 30% of the installation costs &#8211; and this federal
              credit can be paired with additional incentives available in many
              states. The average family will save $300 per year, or $9,000 over
              the life of the system.
              <br />
              <br />
              Breaker <br />
              Box To help a home handle the load from new electric appliances,
              the Inflation Reduction Act also includes tax credits and rebates
              to upgrade a home&apos;s breaker box or electrical wiring. <br />
              <br /> Q1. What residential clean energy expenditures are eligible
              for the Residential Clean Energy Property Credit, and how much is
              the credit? (added December 22, 2022) <br />
              A1. The following residential clean energy expenditures are
              eligible for a Residential Clean Energy Property Credit of 30% of
              the cost:
              <li>solar electric property expenditures (solar panels);</li>
              <li>
                solar water heating property expenditures (solar water heaters);
              </li>
              <li>fuel cell property expenditures;</li>
              <li>
                small wind energy property expenditures (wind turbines);
                geothermal heat pump property expenditures;
              </li>
              <li>and battery storage technology expenditures.</li>
              <br />
              Q2. Are roofing expenditures that were necessary for the
              installation of solar panels eligible for the Residential Clean
              Energy Property Credit? (added December 22, 2022)
              <br /> A2. In general, traditional roofing materials and
              structural components do not qualify for the Residential Clean
              Energy Property Credit because they primarily serve a roofing or
              structural function. However, some solar roofing tiles and solar
              roofing shingles serve as solar electric collectors while also
              performing the function of traditional roofing, serving both the
              functions of solar electric generation and structural support and
              such items qualify for the credit. <br />
              <br />
              Q3. Is there a dollar limit on the Residential Clean Energy
              Property Credit? (added December 22, 2022) <br />
              A3. No, there is no overall dollar limit for the Residential Clean
              Energy Property Credit. The credit is generally limited to 30% of
              qualified expenditures made for property placed in service
              beginning in 2022 through 2032. However, the credit allowed for
              fuel cell property expenditures is 30% of the expenditures up to a
              maximum credit of $500 for each half kilowatt of capacity of the
              qualified fuel cell property. In the case of a residence or
              dwelling unit that is jointly occupied by two or more individuals,
              the maximum amount of such fuel cell property expenditures used to
              calculate the total Residential Clean Energy Property Credit
              amount for all individuals living in that dwelling unit during a
              calendar year is limited to $1,667 for each half kilowatt of
              capacity of qualified fuel cell property. In 2023
              <br />
              <br />
              Households <br />
              can claim a tax credit for 30% of the costs of buying and
              installing a heat pump, up to $2,000 including support for any
              electric system upgrades needed to make the home heat-pump-ready.{" "}
              <br /> Beginning in 2023 state programs offer low- and
              moderate-income households rebates for heat pumps at the
              point-of-sale, cutting costs of purchase and installation up to
              $8,000. If home electrical upgrades are needed to integrate new
              heat pumps, rebates of up to $4,000 are available to households.{" "}
              <br /> <br /> Heat Pump <br />A heat pump provides both heating
              and cooling for homes, as a super-efficient alternative to
              furnaces and air conditioners. Installing a heat pump can save a
              family hundreds of dollars each year on energy bills. The
              Inflation Reduction Act includes tax credits and rebates that can
              cover up to 100% of the costs, depending on household eligibility.
              <br /> <br />
              Heat Pump Water Heater <br />
              Support is available to install heat pump water heaters, which can
              be two to three times more energy efficient than conventional
              water heaters. The Inflation Reduction Act includes tax credits
              and rebates that can cover up to 100% of the costs, depending on
              household eligibility.
              <br /> <br />
              Electric Vehicle <br />
              The Inflation Reduction Act will help more families never pay at
              the pump again, with tax credits up to $7,500 for new electric
              vehicles and $4,000 for used electric vehicles &#8211; saving
              families an average of $950 a year on fuel costs.
              <br /> <br />
              For new vehicles, income-qualified households can receive a tax
              credit of up to $7,500. <br />
              <li>The vehicle must be assembled in North America.</li>
              <li>
                The vehicle must have a manufacturer&apos;s suggested retail
                price of $80,000 or less for pickup trucks, vans, and sport
                utility vehicles (SUVs) and $55,000 or less for other vehicles,
                including sedans.
              </li>
              <li>
                For previously-owned electric vehicles, income-qualified
                households can access a tax credit of up to $4,000.
              </li>
              <li>
                The vehicle must be at least two years old and cost $25,000 or
                less.
              </li>
              <br />
              <br />
              Who Qualifies EV Credit
              <br />
              You may qualify for a credit up to $7,500 under Internal Revenue
              Code Section 30D if you buy a new, qualified plug-in EV or fuel
              cell electric vehicle (FCV). The Inflation Reduction Act of 2022
              changed the rules for this credit for vehicles purchased from 2023
              to 2032.
              <br />
              The credit is available to individuals and their businesses.
              <br />
              To qualify, you must:
              <li>Buy it for your own use, not for resale</li>
              <li>Use it primarily in the U.S.</li>
              In addition, your modified adjusted gross income (AGI) may not
              exceed:
              <li>$300,000 for married couples filing jointly</li>
              <li>$225,000 for heads of households</li>
              <li>$150,000 for all other filers</li>
              You can use your modified AGI from the year you take delivery of
              the vehicle or the year before, whichever is less. If your
              modified AGI is below the threshold in 1 of the two years, you can
              claim the credit.
              <br />
              The credit is nonrefundable, so you can&apos;t get back more on
              the credit than you owe in taxes. You can&apos;t apply any excess
              credit to future tax years.
              <br />
              Qualified Vehicles
              <br />
              To qualify, a vehicle must:
              <li>Have a battery capacity of at least 7 kilowatt hours</li>
              <li>
                Have a gross vehicle weight rating of less than 14,000 pounds
              </li>
              <li>
                Be made by a qualified manufacturer. See our index of qualified
                manufacturers and vehicles.
              </li>
              <li>
                FCVs do not need to be made by a qualified manufacturer to be
                eligible. See Rev. Proc. 2022-42PDF for more detailed guidance.
              </li>
              <li>Undergo final assembly in North America</li>
              The sale qualifies only if:
              <li>You buy the vehicle new</li>
              <li>
                The seller reports required information to you at the time of
                sale and to the IRS.
              </li>
              <li>
                Sellers are required to report your name and taxpayer
                identification number to the IRS for you to be eligible to claim
                the credit.
              </li>
              In addition, the vehicle&apos;s manufacturer suggested retail
              price (MSRP) can&apos;t exceed:
              <li>
                $80,000 for vans, sport utility vehicles and pickup trucks
              </li>
              <li>$55,000 for other vehicles</li>
              MSRP is the retail price of the automobile suggested by the
              manufacturer, including options, accessories and trim but
              excluding destination fees. It isn&apos;t necessarily the price
              you pay.
              <br />
              To confirm whether a vehicle is a van, sport utility vehicle,
              pickup truck or other, see our{" "}
              <Link
                href={
                  "https://www.irs.gov/credits-deductions/manufacturers-and-models-for-new-qualified-clean-vehicles-purchased-in-2023-or-after"
                }
                style={{ textDecoration: "underline" }}>
                qualified vehicles and manufacturers
              </Link>
              . You can find your vehicle&apos;s weight, battery capacity, final
              assembly location (listed as “final assembly point”) and VIN on
              the vehicle&apos;s window sticker.
            </Text>
          </Container>
        </div>
      </Row>
    </div>
  );
};

export default TaxCredits;
