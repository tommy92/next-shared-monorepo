import Home, {
  getServerSideProps as homeGetServerSideProps,
} from "./src/pages/index";

export const HomePage = {
  View: Home,
  Utils: {
    getServerSideProps: homeGetServerSideProps,
  },
};
