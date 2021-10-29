import theme from "./diskai.theme.scss";
let unpatch;
export default () => ({
  onLoad: () => (unpatch = theme()),
  onUnload: () => unpatch(),
});