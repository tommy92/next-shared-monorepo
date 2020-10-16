import { GetServerSideProps } from "next";
export { default } from "../views/Home";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch("https://swapi.dev/api/people").then((res) =>
    res.json()
  );

  return {
    props: {
      data,
    },
  };
};
