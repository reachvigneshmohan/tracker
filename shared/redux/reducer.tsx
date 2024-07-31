let initialState = {
  lang: "en",
  dir: "ltr",
  class: "light",
  dataMenuStyles: "light",
  dataNavLayout: "vertical",
  dataHeaderStyles: "gradient",
  dataVerticalStyle: "overlay",
  dataToggled: "",
  dataNavStyle: "",
  horStyle: "",
  dataPageStyle: "regular",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "",
  colorPrimary: "",
  bodyBg: "",
  Light: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: "",
  authLayoutIsLoading: false,
  modal: false,
  modalTitle: "",
  modalMessage: "",
  modalRedirect: "",
  modalButtonText: "",
  user: {},
};

export default function reducer(state = initialState, action: any) {
  let { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      state = payload;
      return state;
      break;

    default:
      return state;
  }
}
