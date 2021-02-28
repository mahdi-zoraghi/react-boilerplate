import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

// Accept Hot Module Replacement
if (module?.hot) {
  module.hot.accept();
}
/*
  ** for switch this file to typescript (index.tsx) *
  
  export interface IHot {
    accept: any;
  }
  export interface IModule {
    hot: IHot;
  }
  const myModule: IModule = {
    hot: {
      accept: () => {},
    },
    ...module,
  };

  if (myModule?.hot) {
    myModule.hot.accept();
  }
*/
