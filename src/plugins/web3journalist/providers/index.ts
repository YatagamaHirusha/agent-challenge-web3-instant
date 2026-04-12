export { rssProvider } from "./rssProvider";
export { helisProvider } from "./helisProvider";

import type { Provider } from "@elizaos/core";
import { helisProvider } from "./helisProvider";
import { rssProvider } from "./rssProvider";

export const web3journalistProviders: Provider[] = [rssProvider, helisProvider];
