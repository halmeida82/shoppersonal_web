import { configureStore } from '@reduxjs/toolkit';

import settings from "../containers/Configuration/configurationsReducer";
import counter from "../containers/Home/counterReducer"

export default configureStore({
  reducer: {
    settings: settings,
    counter: counter,
  },
});
