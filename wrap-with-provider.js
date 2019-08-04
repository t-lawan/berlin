import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/store/store";

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const state = store()
  return <Provider store={state}>{element}</Provider>
}