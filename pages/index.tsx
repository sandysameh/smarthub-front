import HomeScreen from "@/components/screens/S-Home/HomeScreen";
import Head from "next/head";

function Home() {
  return (
    <>
      <HomeScreen />
    </>
  );
}

// export async function getStaticProps(context: any) {
//   const data = await apiCache.fetchCall(
//     `/restaurant/${env.restaurantId}`,
//     env.apiV1
//   );

//   return {
//     props: {
//       ...(await serverSideTranslations(context.locale, ["login", "common"])),
//       restaurantInfo: data,
//     },
//   };
// }

Home.displayName = "Home";

export default Home;
