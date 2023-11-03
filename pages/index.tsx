import { MenuItems } from "@/components/global/sidebar/Menu.items";
import HomeScreen from "@/components/screens/S-Home/HomeScreen";
import { Tab } from "@/utils/types/dataTypes";
import Head from "next/head";

function Home(props: { images: string[]; tabs: Tab[] }) {
  return (
    <>
      <HomeScreen images={props.images} tabs={props.tabs} />
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
  const categories = MenuItems[0].category;

  const tabs: Tab[] = categories.map((category) => ({
    title: category.title,
    backgroundColor: category.backgroundColor,
    imgUrl: category.imgUrl,
  }));

  return {
    props: {
      //    ...(await serverSideTranslations(context.locale, ["login", "common"])),
      images: data,
      tabs: tabs,
    },
  };
}

Home.displayName = "Home";

export default Home;
