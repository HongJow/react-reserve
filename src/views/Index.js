import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import CompleteExamples from "./index-sections/CompleteExamples.js";
import {Button, Container, Row} from "reactstrap";
import NameCard from 'assets/img/card.png'

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <CompleteExamples />
          <div className="section section-examples">
          <Container className="text-center">
            <img src={NameCard}/>
          </Container>
          <div className="space-50"></div>
        </div>
        </div>
        <DarkFooter/>
      </div>
    </>
  );
}

export default Index;
