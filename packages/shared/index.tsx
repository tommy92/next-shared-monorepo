import Home, {
  getServerSideProps as homeGetServerSideProps,
} from "./src/pages/index";

export const HomePage = {
  View: Home,
  Utils: {
    getServerSideProps: homeGetServerSideProps,
  },
};

export { default as AppPage } from "./src/views/App";
