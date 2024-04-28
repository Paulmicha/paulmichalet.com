import { Suspense } from "solid-js";
// import { Router, useParams } from "@solidjs/router";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
// import MetaTags from '~/components/MetaTags';

// const params = useParams();

export default function App() {
  return (
    <Router root={props => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
      {/* <FileRoutes>
        <MetaProvider>
          <MetaTags />
          <pre>{JSON.stringify(params)}</pre>
        </MetaProvider>
      </FileRoutes> */}
    </Router>
  );
}
