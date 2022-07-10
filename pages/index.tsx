import type { NextPage } from "next";
import Memes from "../components/memes";

export async function getServerSideProps() {
  const res = await fetch("https://meme-api.herokuapp.com/gimme/1");

  return {
    props: { data: await res.json() }, 
  };
}

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Memes data={data} />
    </>
  );
};

export default Home;
