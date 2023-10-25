import React from 'react';
import styled from 'styled-components';
import ImgTitleTextRow from '../../components/ImgTitleTextRow';
import theme from "./theme/theme";
import img1 from '../../img/founder.jpg';
import {Box, ThemeProvider, Button, Select, MenuItem} from '@material-ui/core';

const StyledSection = styled.section`
  margin: 1rem;
  font-family: font-family: 'Lato', sans-serif;

  .heading-primary--sub {
    text-align: center;
    font-size:45px;
  };

  .wrapper-searchBar{
    box-shadow: 0px 1px 3px rgba(0,0,0.1);
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    width: 75%;
    padding: 20px;
    & > * {
      height: 45px;
      flex:1;
      margin: 6px;
      font-size: 18px;
      text-Align: center;
      padding-top: 8px;
      border-radius: 5px;
    };
  };
  .wrapper-jobListing {
    margin: 0 auto;
    border:1px solid black;
    width: 50%;


  };


`;

// const content = [
//   {
//     titleMain: 'Internship Vacancies',
//     titleSub: 'Featured1',
//     img: img1,
//     text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
//     scelerisque ante sollicitudin. Cras purus odio, vestibulum in
//     vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
//     nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
//     eu leo. Cum sociis natoque penatibus et magnis dis parturient
//     montes, nascetur ridiculus mus.`,
//   },
//   {
//     titleMain: 'Job Vacancies',
//     titleSub: 'Featured2',
//     img: img1,
//     text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
//     scelerisque ante sollicitudin. Cras purus odio, vestibulum in
//     vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
//     nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
//     eu leo. Cum sociis natoque penatibus et magnis dis parturient
//     montes, nascetur ridiculus mus.`,
//   },
//   {
//     titleMain: 'Resume Assistance',
//     titleSub: 'Featured3',
//     img: img1,
//     text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
//     scelerisque ante sollicitudin. Cras purus odio, vestibulum in
//     vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
//     nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//     Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
//     eu leo. Cum sociis natoque penatibus et magnis dis parturient
//     montes, nascetur ridiculus mus.`,
//   },
// ];
//
// const RenderContent = content.map((data, key) => {
//   return (
//     <ImgTitleTextRow
//       key={key}
//       titleMain={data.titleMain}
//       titleSub={data.titleSub}
//       img={data.img}
//       text={data.text}
//     />
//   );
// });

const CareerLink = () => {
  return (
    <ThemeProvider theme={theme}>
    <StyledSection>

      <h1 className="heading-primary--sub">Career with MAPSS</h1>
        <Box className= "wrapper-searchBar">
        <h1>Job Category</h1>
        <Select disableUnderline variant="filled" defaultValue ="Any" >
          <MenuItem value = "Any"> Any </MenuItem>
          <MenuItem value = "Information"> Information Technology </MenuItem>
          <MenuItem value = "Human Resource"> Human Resource </MenuItem>
          <MenuItem value = "Administration" > Administration </MenuItem>
        </Select>
          <h1>Job Position</h1>
          <Select disableUnderline variant="filled" defaultValue ="Any" >
            <MenuItem value = "Any"> Any </MenuItem>
            <MenuItem value = "Business Analyst"> Business Analyst </MenuItem>
            <MenuItem value = "Software Developer"> Software Developer </MenuItem>
            <MenuItem value = "Cyber Secuirty" > Cyber Security </MenuItem>
          </Select>
            <h1>Job Type</h1>
          <Select disableUnderline variant="filled" defaultValue ="Any">
            <MenuItem value = "Any"> Any </MenuItem>
            <MenuItem value = "FullTime"> Full-Time  </MenuItem>
            <MenuItem value = "Part-Time"> Part-Time </MenuItem>
            <MenuItem value = "Internship" > Internship </MenuItem>
          </Select>
          <Button color="primary" variant="contained" disabledElevation>Search</Button>
        </Box>



    </StyledSection>
    </ThemeProvider>
  );
};

export default CareerLink;
