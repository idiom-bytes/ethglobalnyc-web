// // // // // // // // // // // // // // // // // // // //
// ENVIRONMENT STATE
// // // // // // // // // // // // // // // // // // // //

const IS_PROD =
  !!process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === "prod";

export const IS_LIVE_RUN = IS_PROD;

// // // // // // // // // // // // // // // // // // // //
// API URL
// // // // // // // // // // // // // // // // // // // //

const LOCAL_API_URL = process.env.REACT_APP_LOCAL_API_URL
  ? process.env.REACT_APP_LOCAL_API_URL
  : "";
const PROD_API_URL = process.env.REACT_APP_PROD_API_URL
  ? process.env.REACT_APP_PROD_API_URL
  : "";

export const API_URL = IS_PROD ? PROD_API_URL : LOCAL_API_URL;
