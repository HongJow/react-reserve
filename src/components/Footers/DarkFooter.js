/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, GreenZone 대표 이윤수.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
