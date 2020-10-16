import { HomePage } from "shared";

const Home = ({ data }) => {
  const { results } = data;

  return (
    <>
      <h1>Itaka</h1>
      <HomePage.View />

      <ul>
        {results.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = HomePage.Utils.getServerSideProps;
export default Home;
