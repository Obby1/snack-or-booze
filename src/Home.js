import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h5" className="font-weight-bold">
            Welcome to Snack or Booze, Silicon Valley's premier dive cafe!
          </CardTitle>
          <p>Snacks available: {snacks.length}</p>
          <p>Drinks available: {drinks.length}</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

