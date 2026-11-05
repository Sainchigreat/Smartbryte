// QA-only entry: server-renders the real homepage and exposes the content
// module so the QA script can verify exact copy against the PDF fixture.
import { renderToStaticMarkup } from "react-dom/server";
import App from "../src/App";
import * as content from "../src/lib/content";

export const html = renderToStaticMarkup(<App />);
export { content };
