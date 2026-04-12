import type { Action } from "@elizaos/core";
import { generateArticleAction } from "./generateArticle";
import { publishArticleAction } from "./publishArticle";

export const web3journalistActions: Action[] = [generateArticleAction, publishArticleAction];

export { generateArticleAction, generateArticle } from "./generateArticle";
export { publishArticleAction, publishArticle } from "./publishArticle";
