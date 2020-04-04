const colors = {
  firstColor: "#49afd7",
  secondColor: "#FFF27A",
  thirdColor: "#FF8484",
  fourthColor: "#6ae9ac",
  fifthColor: "#b0f48a",
  sixthColor: "#f9f871",
  warning: "#D41638",
  success: "#00D563",
  grey1: "#F7F7F7",
  grey2: "#F1F1F1",
  grey3: "#E4E4E4",
  grey4: "#CCC",
  grey5: "#B3B3B3",
  grey6: "#808080",
  grey7: "#4C4C4C",
  grey8: "#1D1D1D",
  facebook: "#4267b2",
  twitter: "#1da1f2",
  pinterest: "#e60023",
  whatsapp: "#00e676"
};

const boxShadows = {
  default: {
    xs: "0 0 1px 0 rgba(0, 0, 0, 0.3)",
    s: "0 0 2px 0 rgba(0, 0, 0, 0.3)",
    m: "0 0 4px 0 rgba(0, 0, 0, 0.3)",
    l: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    xl: "0 0 40px 0 rgba(0, 0, 0, 0.3)",
    google:
      "0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149)"
  },
  hover: {
    xs: "-2px 2px 4px 0 rgba(0, 0, 0, 0.3)",
    s: "-4px 4px 7px 0 rgba(0, 0, 0, 0.3)",
    m: "-7px 7px 10px 0 rgba(0, 0, 0, 0.3)",
    l: "-12px 12px 18px 0 rgba(0, 0, 0, 0.3)",
    xl: "-15px 15px 26px 0 rgba(0, 0, 0, 0.2)",
    google:
      "0 1px 3px 0 rgba(60,64,67,0.302),0 4px 8px 3px rgba(60,64,67,0.149)"
  },
  special: {
    double: "0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)",
    thin: "0px 30px 60px rgba(0,0,0,0.12)"
  },
  preset:
    "box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149); transition: all linear 0.1s; :hover { box-shadow: 0 1px 3px 0 rgba(60,64,67,0.302),0 4px 8px 3px rgba(60,64,67,0.149) }"
};

const breakPoints = { s: 576, m: 768, l: 992, xl: 1200 };

const borderRadius = {
  normal: "10px",
  strong: "20px"
};

export const theme = {
  colors,
  boxShadows,
  borderRadius
};

export type colorType = typeof colors;

export type colorInputType = keyof typeof colors;

export type boxShadowsType = typeof boxShadows;
export type borderRadiusType = typeof borderRadius;

export default theme;
