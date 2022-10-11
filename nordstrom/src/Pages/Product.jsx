import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Redux/action";

const getCurrpage = (val) => {
  let value = Number(val);
  if (typeof value !== "number" || value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};
const getUrl = (currUrl, orderby, sorybyType) => {
  return orderby ? `${currUrl}&_sort=${sorybyType}&_order=${orderby}` : currUrl;
};
export const Product = () => {
  let [searchparam, setSearchParam] = useSearchParams();
  const initPage = getCurrpage(searchparam.get("page"));
  const [page, setPage] = useState(initPage);
  const [length, setLength] = useState(0);
  const [selectvalue, setSelectValuue] = useState(
    searchparam.get("selectvalue")
  );
  const [sortby, setSortby] = useState(searchparam.get("sortby"));
  const [sorybyType, setSortbyType] = useState(searchparam.get("sorybyType"));
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state);

  const ref = useRef(null);
  console.log(ref.__reactProps$1k6w6ta9zbc);
  useEffect(() => {
    let url = getUrl(
      `http://localhost:4001/products?_limit=20&_page=${page}`,
      sortby,
      sorybyType
    );
    dispatch(getData(url, setLength));
  }, [page, sortby, sorybyType]);
  // console.log(sortby);
  useEffect(() => {
    let paramObj = {
      page,
    };
    if (sortby) {
      paramObj.sortby = sortby;
    }
    if (sorybyType) {
      paramObj.sorybyType = sorybyType;
    }
    if (selectvalue) {
      paramObj.selectvalue = selectvalue;
    }
    setSearchParam(paramObj);
  }, [page, sortby, sorybyType]);

  const handleId = (id) => {
    console.log(id);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setSelectValuue(value);

    if (value === "rating") {
      setSortby("desc");
      setSortbyType("rating");
    } else if (value === "pricedesc") {
      setSortby("desc");
      setSortbyType("price");
    } else if (value === "pricease") {
      setSortby("ase");
      setSortbyType("price");
    } else if (value === "discount") {
      setSortby("desc");
      setSortbyType("discountDisplayLabel");
    } else if (value === "") {
      setSortby();
      setSortbyType();
    }
  };
  if (loading) {
    return (
      <Stack>
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
      </Stack>
    );
  }
  if (error) {
    return (
      <Box textAlign="center" m="15%">
        <Spinner
          thickness="10px"
          speed="0.50s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Heading>Somethings went wrong , please refresh the page.</Heading>
      </Box>
    );
  }
  return (
    <Box marginLeft="20%">
      <Box>
        <Image
          src="	https://n.nordstrommedia.com/id/748369e6-331e-453f-83f6-ba94c3c7bdae.png?h=417&w=1334"
          alt="Dan Abramov"
        />
      </Box>

      <Flex justifyContent="space-between" padding="1% 5%">
        <Box>
          <Heading as="h5" size="sm">
            Sale & Clearance
          </Heading>
          <Text m="20px"> {length} items</Text>
        </Box>
        <Select
          width="23%"
          value={selectvalue}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Sort by featured</option>
          <option value="rating">Sort by customer rating</option>
          <option value="newest">Sort by newest</option>
          <option value="discount">Sort by price off</option>
          <option value="pricedesc">Sort by price : High to Low</option>
          <option value="pricease">Sort by price : Low to High</option>
        </Select>
      </Flex>

      <SimpleGrid columns={[2, 3, 4]}>
        {products.map((item) => (
          <Box
            m="3%"
            p="3%"
            key={item.id + Date.now() + item.product}
            onClick={() => handleId(item.id)}
            // border="1px solid red"
          >
            <Image width="100%" m="auto" src={item.searchImage} alt="picture" />
            <Flex width="80%" m="2% auto">
              <Button bg="black" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="red" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="blue" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="yellow" borderRadius="50%" m="3%" size="xs"></Button>
            </Flex>
            <Box>{item.brand}</Box>
            <Box>{item.product}</Box>
            <Box color="red">{item.price} ₹ </Box>
            <Box color="red">{item.discountDisplayLabel}</Box>
            <Box textDecoration="line-through">{item.mrp} ₹</Box>

            <Box>
              {item.rating} ({item.ratingCount})
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          disabled={page === Math.ceil(length / 20)}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
