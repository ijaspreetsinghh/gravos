"use client";
import { Image } from "@nextui-org/react";
const OfferImage = () => {
  return (
    <Image
      draggable={false}
      src='/offer.svg'
      alt='Offer'
      objectFit='contain'
      css={{
        width: 220,

        margin: "auto",
        display: "flex",
      }}
    />
  );
};
export default OfferImage;
