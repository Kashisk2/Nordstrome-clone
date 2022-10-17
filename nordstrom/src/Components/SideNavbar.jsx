import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useContext } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { StateContext } from "../Contex/StateContext";
import StylesSideBar from "./SideNavbar.module.css"
export const SideNavbar = () => {
  const { checkfilter, handleChange, handleChangeBrand, checkfilterBrand } =
    useContext(StateContext);

  return (
    <Box width='20%' className={StylesSideBar.sideNavbar}> 
      <Sidebar  style={{zIndex:0}} >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sale</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">All Sale</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Menu>
        <hr />
        <SubMenu label="Gender" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="men">
              {" "}
              <input
                type="checkbox"
                id="men"
                style={{ marginRight: "10px" }}
                name="Men"
                checked={checkfilter.Men}
                onChange={(e) => handleChange(e)}
              />
              Men
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="women">
              {" "}
              <input
                type="checkbox"
                id="women"
                style={{ marginRight: "10px" }}
                name="Women"
                checked={checkfilter.Women}
                onChange={(e) => handleChange(e)}
              />
              Women
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="unisex">
              {" "}
              <input
                type="checkbox"
                id="unisex"
                style={{ marginRight: "10px" }}
                name="Unisex"
                checked={checkfilter.Unisex}
                onChange={(e) => handleChange(e)}
              />
              Unisex
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="girls">
              {" "}
              <input
                type="checkbox"
                id="girls"
                style={{ marginRight: "10px" }}
                name="Girls"
                checked={checkfilter.Girls}
                onChange={(e) => handleChange(e)}
              />
              Girls
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Brand  -------------- */}
        <SubMenu label="Brand" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Daniel_Klein">
              {" "}
              <input
                type="checkbox"
                id="Daniel_Klein"
                style={{ marginRight: "10px" }}
                name="Baniel_klein"
                checked={checkfilterBrand.Baniel_klein}
                onChange={(e) => handleChangeBrand(e)}
              />
              Daniel Klein
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="roadster">
              {" "}
              <input
                type="checkbox"
                id="roadster"
                style={{ marginRight: "10px" }}
                name="Roadster"
                checked={checkfilterBrand.Roadster}
                onChange={(e) => handleChangeBrand(e)}
              />
              Roadster
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="puma">
              {" "}
              <input
                type="checkbox"
                id="puma"
                style={{ marginRight: "10px" }}
                name="Puma"
                checked={checkfilterBrand.Puma}
                onChange={(e) => handleChangeBrand(e)}
              />
              Puma
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="levis">
              {" "}
              <input
                type="checkbox"
                id="levis"
                style={{ marginRight: "10px" }}
                name="Levis"
                checked={checkfilterBrand.Levis}
                onChange={(e) => handleChangeBrand(e)}
              />
              Levis
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Product Type */}
        <SubMenu label="Product Type" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="accessories">
              {" "}
              <input
                type="checkbox"
                id="accessories"
                style={{ marginRight: "10px" }}
              />
              Accessories
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="clothing">
              {" "}
              <input
                type="checkbox"
                id="clothing"
                style={{ marginRight: "10px" }}
              />
              Clothing
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="beauty_grooming">
              {" "}
              <input
                type="checkbox"
                id="beauty_grooming"
                style={{ marginRight: "10px" }}
              />
              Beauty & Grooming
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="shoes">
              {" "}
              <input
                type="checkbox"
                id="shoes"
                style={{ marginRight: "10px" }}
              />
              Shoes
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Price--------------- */}
        <SubMenu label="Price" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="100_200">
              {" "}
              <input
                type="checkbox"
                id="100_200"
                style={{ marginRight: "10px" }}
              />
              ₹100-₹500
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="500_1000">
              {" "}
              <input
                type="checkbox"
                id="500_1000"
                style={{ marginRight: "10px" }}
              />
              ₹500-₹1000
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="1000_2000">
              {" "}
              <input
                type="checkbox"
                id="1000_2000"
                style={{ marginRight: "10px" }}
              />
              ₹1000-₹2000
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="2000_5000">
              {" "}
              <input
                type="checkbox"
                id="2000_5000"
                style={{ marginRight: "10px" }}
              />
              ₹2000-₹5000
            </label>
          </MenuItem>
        </SubMenu>
        <hr />
        {/* Color */}

        <SubMenu label="Color" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="black">
              {" "}
              <input
                type="checkbox"
                id="black"
                style={{ marginRight: "10px" }}
              />
              Black
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="red">
              {" "}
              <input type="checkbox" id="red" style={{ marginRight: "10px" }} />
              Red
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="blue">
              {" "}
              <input
                type="checkbox"
                id="blue"
                style={{ marginRight: "10px" }}
              />
              Blue
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="yellow">
              {" "}
              <input
                type="checkbox"
                id="yellow"
                style={{ marginRight: "10px" }}
              />
              Yellow
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Feature----------------------------------------- */}
        <SubMenu label="Feature" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Hooded">
              {" "}
              <input
                type="checkbox"
                id="Hooded"
                style={{ marginRight: "10px" }}
              />
              Hooded
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Lined">
              {" "}
              <input
                type="checkbox"
                id="Lined"
                style={{ marginRight: "10px" }}
              />
              Lined
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Breathable">
              {" "}
              <input
                type="checkbox"
                id="Breathable"
                style={{ marginRight: "10px" }}
              />
              Breathable
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Nursing">
              {" "}
              <input
                type="checkbox"
                id="Nursing"
                style={{ marginRight: "10px" }}
              />
              Nursing
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Neck Style------------------------------- */}

        <SubMenu label="Neck Style" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Boat_Neck">
              {" "}
              <input
                type="checkbox"
                id="Boat_Neck"
                style={{ marginRight: "10px" }}
              />
              Boat Neck
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Crewneck">
              {" "}
              <input
                type="checkbox"
                id="Crewneck"
                style={{ marginRight: "10px" }}
              />
              Crewneck
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Halter">
              {" "}
              <input
                type="checkbox"
                id="Halter"
                style={{ marginRight: "10px" }}
              />
              Halter
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Henley">
              {" "}
              <input
                type="checkbox"
                id="Henley"
                style={{ marginRight: "10px" }}
              />
              Henley
            </label>
          </MenuItem>
        </SubMenu>
        <hr />
        {/* Occasion */}
        <SubMenu label="Occasion" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Bridal">
              {" "}
              <input
                type="checkbox"
                id="Bridal"
                style={{ marginRight: "10px" }}
              />
              Bridal
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Dress">
              {" "}
              <input
                type="checkbox"
                id="Dress"
                style={{ marginRight: "10px" }}
              />
              Dress
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Formal">
              {" "}
              <input
                type="checkbox"
                id="Formal"
                style={{ marginRight: "10px" }}
              />
              Formal
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Party">
              {" "}
              <input
                type="checkbox"
                id="Party"
                style={{ marginRight: "10px" }}
              />
              Party
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Sleeve Length--------------------- */}
        <SubMenu label="Sleeve Length" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Sleeveless">
              {" "}
              <input
                type="checkbox"
                id="Sleeveless"
                style={{ marginRight: "10px" }}
              />
              Sleeveless
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Cap Sleeve">
              {" "}
              <input
                type="checkbox"
                id="Cap Sleeve"
                style={{ marginRight: "10px" }}
              />
              Cap Sleeve
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Short_Sleeve">
              {" "}
              <input
                type="checkbox"
                id="Short_Sleeve"
                style={{ marginRight: "10px" }}
              />
              Short Sleeve
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Long_Sleeve">
              {" "}
              <input
                type="checkbox"
                id="Long_Sleeve"
                style={{ marginRight: "10px" }}
              />
              Long Sleeve
            </label>
          </MenuItem>
        </SubMenu>
        <hr />

        {/* Style----------------- */}
        <SubMenu label="Style" style={{ margin: "3% auto" }}>
          <MenuItem>
            {" "}
            <label htmlFor="Active">
              {" "}
              <input
                type="checkbox"
                id="Active"
                style={{ marginRight: "10px" }}
              />
              Active
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Ballet">
              {" "}
              <input
                type="checkbox"
                id="Ballet"
                style={{ marginRight: "10px" }}
              />
              Ballet
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Band">
              {" "}
              <input
                type="checkbox"
                id="Band"
                style={{ marginRight: "10px" }}
              />
              Band
            </label>
          </MenuItem>
          <MenuItem>
            {" "}
            <label htmlFor="Charm">
              {" "}
              <input
                type="checkbox"
                id="Charm"
                style={{ marginRight: "10px" }}
              />
              Charm
            </label>
          </MenuItem>
        </SubMenu>
        <hr />
      </Menu>
    </Sidebar>
    </Box>
  );
};
