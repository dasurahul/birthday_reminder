import React from "react";
import data from "./data";
import Birthdays from "./Birthdays";

const App = () => {
  return (
    <main>
      <Birthdays birthdayData={data} />
    </main>
  );
};

export default App;
