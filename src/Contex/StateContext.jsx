import { useDisclosure } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Redux/action";

export const StateContext = createContext();

// for handle page url

// for get updated urls which we are select by sort or filter
const getUrl = (currUrl, orderby, sortbyType, genderName, brandName) => {
  if (orderby && sortbyType && genderName && brandName) {
    return `${currUrl}&_sort=${sortbyType}&_order=${orderby}&gender=${genderName}&brand=${brandName}`;
  } else if (orderby && sortbyType && genderName) {
    return `${currUrl}&_sort=${sortbyType}&_order=${orderby}&gender=${genderName}`;
  } else if (orderby && sortbyType && brandName) {
    return `${currUrl}&_sort=${sortbyType}&_order=${orderby}&brand=${brandName}`;
  } else if (orderby && sortbyType) {
    return `${currUrl}&_sort=${sortbyType}&_order=${orderby}`;
  } else if (genderName && brandName) {
    return `${currUrl}&gender=${genderName}&brand=${brandName}`;
  } else if (genderName) {
    return `${currUrl}&gender=${genderName}`;
  } else if (brandName) {
    return `${currUrl}&brand=${brandName}`;
  }

  return currUrl;
};

export const StateContextProvider = ({ children }) => {
  let [searchparam, setSearchParam] =
    useSearchParams(); /*for genrate links in searchbar*/
  const [length, setLength] = useState(0); /*for get length of product*/
  // console.log(length);
  const getCurrpage = (val) => {
    let value = Number(val);
    if (typeof value !== "number" || value <= 0) {
      value = 1;
    }
    if (!value) {
      value = 1;
    }

    if (length < 20) {
      value = 1;
      console.log(length);
    }
    return value;
  };

  const initPage = getCurrpage(
    searchparam.get("page")
  ); /*for page not update when refresh*/
  const [page, setPage] = useState(initPage); /*for get page*/

  //   for filtering of gender-----------------------------------------------------------
  const [genderName, setGenderName] = useState(
    searchparam.get("genderName")
  ); /*for filter by gender*/
  const [valueGender, setValueGender] = useState(
    searchparam.get("valueGender")
  );
  const keyGender = searchparam.get("genderName");
  const keyvalueGender = searchparam.get("valueGender");

  const [checkfilter, setCheckfilter] = useState({
    [keyGender]: keyvalueGender,
  }); /*for check of gender that check box checked or not*/

  //   for filtering of brand-----------------------------------------------------------

  const [brandName, setBrandName] = useState(
    searchparam.get("brandName")
  ); /*for filte by barandr*/

  const [valueBrand, setValueBrand] = useState(searchparam.get("valueBrand"));
  const keyBrand = searchparam.get("brandName");
  const keyvalueBrand = searchparam.get("valueBrand");

  const [checkfilterBrand, setCheckfilterBrand] = useState({
    [keyBrand]: keyvalueBrand,
  }); /*for check of brand that check box checked or not*/

  //   for all sorting---------------------------------------------------------
  const [selectvalue, setSelectValuue] = useState(
    searchparam.get("selectvalue")
  ); /*for render updated sortType */

  const [sortby, setSortby] = useState(
    searchparam.get("sortby")
  ); /*for get orderby like ase and desc */
  const [sortbyType, setSortbyType] = useState(
    searchparam.get("sortbyType")
  ); /*for get sortbyType */

  let cartDataArray = JSON.parse(localStorage.getItem("CartData")) || [];
  let LaterDataArray = JSON.parse(localStorage.getItem("laterBag")) || [];
  const [bagLength, setBagLength] = useState(
    cartDataArray.length
  ); /*length of bag for show on carpage tab */
  const [laterBagLen, setLaterBagLen] = useState(
    LaterDataArray.length
  ); /*length of laterBag for show on carpage tab */

  //   useeffects for  get data ---------------------------------------------
  const dispatch = useDispatch();
  useEffect(() => {
    let url = getUrl(
      `https://nordstrom-ojra.onrender.com/products?_limit=20&_page=${page}`,
      sortby,
      sortbyType,
      genderName,
      brandName
    );
    dispatch(getData(url, setLength));
  }, [
    page,
    sortby,
    sortbyType,
    genderName,
    valueGender,
    brandName,
    valueBrand,
  ]);

  //  useeffect for userParams-------------------------------------------------------

  useEffect(() => {
    let paramObj = {
      page,
    };
    if (sortby) {
      paramObj.sortby = sortby;
    }
    if (sortbyType) {
      paramObj.sortbyType = sortbyType;
    }
    if (selectvalue) {
      paramObj.selectvalue = selectvalue;
    }
    if (genderName) {
      paramObj.genderName = genderName;
    }
    if (valueGender) {
      paramObj.valueGender = valueGender;
    }
    if (brandName) {
      paramObj.brandName = brandName;
    }
    if (valueBrand) {
      paramObj.valueBrand = valueBrand;
    }

    setSearchParam(paramObj);
  }, [
    page,
    sortby,
    sortbyType,
    genderName,
    valueGender,
    brandName,
    valueBrand,
  ]);

  //   function for filtering of gender----------------------------------------
  const handleChange = (e) => {
    const { name, checked } = e.target;

    setCheckfilter({ [name]: checked });

    if (checked) {
      setValueGender(checked);
      setGenderName(name);
    } else {
      setGenderName("");
      setValueGender("");
    }
    // console.log(checked);
  };
  //   function for filtering of brand----------------------------------------

  const handleChangeBrand = (e) => {
    const { name, checked } = e.target;

    setCheckfilterBrand({ [name]: checked });

    if (checked) {
      setValueBrand(checked);
      setBrandName(name);
    } else {
      setBrandName("");
      setValueBrand("");
    }
    // console.log(checked);
  };

  //  value for publicState -------------------------------------
  const publicState = {
    sortby,
    setSortby,
    sortbyType,
    setSortbyType,
    selectvalue,
    setSelectValuue,
    length,
    setLength,
    page,
    setPage,
    checkfilter,
    setGenderName,
    handleChange,
    handleChangeBrand,
    checkfilterBrand,
    bagLength,
    setBagLength,
    laterBagLen,
    setLaterBagLen,
  };

  return (
    <StateContext.Provider value={publicState}>
      {children}
    </StateContext.Provider>
  );
};
