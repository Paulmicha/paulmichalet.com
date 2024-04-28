import { MetaProvider } from '@solidjs/meta';
// import { useParams } from "@solidjs/router";
// import MetaTags from '~/components/MetaTags';
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// const params = useParams();

export default function Index() {
  return (
    <>
      {/* <MetaProvider> */}
        {/* <MetaTags
          title="test title"
          description="test desc"
        /> */}
      <Header/>
      <main>
        TODO homepage
        {/* <pre>{JSON.stringify(params)}</pre> */}
      </main>
      <Footer/>
      {/* </MetaProvider> */}
    </>
  );
}
