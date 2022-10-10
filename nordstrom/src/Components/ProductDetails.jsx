import "./ProductDetails.css";
import { Box, Image, HStack } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react';
import React from "react";

export default function ProductDetails() {
  return (
    <Box className="mainDivSection">
      <HStack>
        <Box className="mainImgDiv">
          <HStack ml={20} mr={15} mt={10}>
            <Box>
              <Image
                width={400}
                src="https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
              />
            </Box>
            <Box>
              <Image
                width={400}
                src="https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
              />
            </Box>
          </HStack>
          <HStack ml={20} mr={15} mt={5}>
            <Box>
              <Image
                width={400}
                src="https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
              />
            </Box>
            <Box>
              <Image
                width={400}
                src="https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
              />
            </Box>
          </HStack>
        </Box>
        <Box className="detailsSection">
          <Box className="detailsSectionHeader">
            <Box></Box>
            <Box>
              <h1 className="detailsSectionHeaderText">
                CozyChic Lite® Circle Cardigan
              </h1>
            </Box>
            <Box>BAREFOOT DREAMS</Box>
            <Box>
              <h1>INR 5,096.92</h1>
            </Box>
            <Box>(Up to 50% off select items)</Box>
            <Box>
              <h3>INR 10,193.84</h3>
            </Box>
            <Box>
              <p>
                A soft and lightweight knit enriches the comfort of a long
                lounge cardi that keeps you cozy around the house or out on
                errands.
              </p>
            </Box>
            <Box>
              <Select placeholder="Size">
                <option value="option1">X-small/Small</option>
                <option value="option2">Medium</option>
                <option value="option3">Large/X-Large</option>
              </Select>
            </Box>
            <Box>
            <Select placeholder="Choose a color">
                <option value="option1">Indigo</option>
                <option value="option2">Black</option>
                <option value="option3">Soft Camel</option>
                <option value="option3">He Pewter/Pearl</option>
                <option value="option3">Purple Dusk</option>
                <option value="option3">Gray Skies</option>
              </Select>
            </Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
