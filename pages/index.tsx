import HomeScreen from "@/components/screens/S-Home/HomeScreen";
import Head from "next/head";

function Home(props: { images: string[] }) {
  return (
    <>
      <HomeScreen images={props.images} />
    </>
  );
}

export async function getStaticProps(context: any) {
  // const data = await apiCache.fetchCall(
  //   `/restaurant/${env.restaurantId}`,
  //   env.apiV1
  // );
  const data = [
    "https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding.jpeg",
    "  https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding2.jpeg",
    "https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding3.jpeg",
  ];
  return {
    props: {
      //    ...(await serverSideTranslations(context.locale, ["login", "common"])),
      images: data,
    },
  };
}

Home.displayName = "Home";

export default Home;
