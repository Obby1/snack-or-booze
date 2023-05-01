import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItem from "./AddItem";

function App() {
  // declare state
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // retrieve menu items from API on page load
  useEffect(() => {
    async function getMenuItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getMenuItems();
  }, []);

  // function to add new items to database and update state
  async function addItem(item) {
    const newItem = await SnackOrBoozeApi.addItem(item);
    if (newItem.type === "snack") {
      setSnacks((snacks) => [...snacks, newItem]);
    } else if (newItem.type === "drink") {
      setDrinks((drinks) => [...drinks, newItem]);
    }
  }


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" itemType="snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" itemType="drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <AddItem addItem={addItem} />
            </Route>
            <Route>
              <p style={{ color: `black` }}>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
