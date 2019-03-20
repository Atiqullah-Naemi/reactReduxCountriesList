import React, { Component } from "react";
import { connect } from "react-redux";
import {
   Container,
   Row,
   Col,
   Card,
   CardImg,
   CardBody,
   CardTitle,
   CardSubtitle
} from "reactstrap";
import { getCountries } from "../actions/countriesAction";

class countriesList extends Component {
   componentDidMount() {
      this.props.getCountries();
   }
   render() {
      const { countries } = this.props.countries;

      return (
         <Container>
            <Row>
               {countries.map((country, index) => (
                  <Col key={index} md={4}>
                     <Card>
                        <CardImg
                           top
                           width="100%"
                           src={country.flag}
                           alt={country.name}
                        />
                        <CardBody>
                           <CardTitle>{country.name}</CardTitle>
                           <CardSubtitle>
                              Capital: {country.capital}
                           </CardSubtitle>
                           <ul>
                              <li>Region: {country.region}</li>
                              <li>Subregion: {country.subregion}</li>
                              <li>NativeName: {country.nativeName}</li>
                              <li>Area: {country.area}</li>
                              <li>Population: {country.population}</li>
                           </ul>
                        </CardBody>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   countries: state.countries
});

export default connect(
   mapStateToProps,
   { getCountries }
)(countriesList);
