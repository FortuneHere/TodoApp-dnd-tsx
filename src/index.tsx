import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SkeletonTheme} from 'react-loading-skeleton'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
<SkeletonTheme baseColor="#dbdbdb" highlightColor="#ebebeb">
<App />
</SkeletonTheme>
);
