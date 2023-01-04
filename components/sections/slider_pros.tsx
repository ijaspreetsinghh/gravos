import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Text } from "@nextui-org/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { montserrat } from "../../pages/_app";
import SizedBox from "../sized_box";

const SliderPros = () => {
  return (
    <Swiper
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      style={{ height: "100%" }}>
      <SwiperSlide>
        <Image
          draggable={false}
          src={`/project_1.png`}
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
        <SizedBox height={20} />
        <div
          style={{
            width: "90%",
            height: 5,
            background: "#8205E9",
            justifyContent: "center",
            margin: "auto",
          }}></div>
        <SizedBox height={20} />
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            height: "auto",
          }}>
          <Text
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Powerful Enough to run Everything you are used to at the same time
            just like being grid connected
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          draggable={false}
          src={`/project_2.png`}
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
        />{" "}
        <SizedBox height={20} />
        <div
          style={{
            width: "90%",
            height: 5,
            background: "#8205E9",
            justifyContent: "center",
            margin: "auto",
          }}></div>
        <SizedBox height={20} />
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            height: "auto",
          }}>
          <Text
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Power AC, Pools, and Charge your EV with out worries off grid
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          draggable={false}
          src={`/project_3.png`}
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
        />{" "}
        <SizedBox height={20} />
        <div
          style={{
            width: "90%",
            height: 5,
            background: "#8205E9",
            justifyContent: "center",
            margin: "auto",
          }}></div>
        <SizedBox height={20} />
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            height: "auto",
          }}>
          <Text
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Generate power with out solar any time in any weather and off Grid
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          draggable={false}
          src={`/project_4.png`}
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
        />{" "}
        <SizedBox height={20} />
        <div
          style={{
            width: "90%",
            height: 5,
            background: "#8205E9",
            justifyContent: "center",
            margin: "auto",
          }}></div>
        <SizedBox height={20} />
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            height: "auto",
          }}>
          <Text
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Capture 100% efficiency of the sun
          </Text>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Image
          draggable={false}
          src={`/project_5.png`}
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
        />{" "}
        <SizedBox height={20} />
        <div
          style={{
            width: "90%",
            height: 5,
            background: "#8205E9",
            justifyContent: "center",
            margin: "auto",
          }}></div>
        <SizedBox height={20} />
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            height: "auto",
          }}>
          <Text
            className={montserrat.className}
            css={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Maximize Utility Benefits
          </Text>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderPros;
