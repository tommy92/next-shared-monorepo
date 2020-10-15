import { HomePage, HomeServerSideProps } from "shared";

const Home = ({ data }) => {
  const { count, results } = data;

  return (
    <>
      <h1>Itaka</h1>
      <HomePage />

      <ul>
        {results.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = HomeServerSideProps;
export default Home;
