import type { Plugin } from "@elizaos/core";
import { web3journalistActions } from "./actions";
import { web3journalistProviders } from "./providers";
import { web3JournalistSchedulerService } from "./services/scheduler";
import { createHeliusWebhookRoute } from "./webhook/heliusWebhookRoute";

// TODO: implement in prompt-XX
export const web3journalistPlugin: Plugin = {
  name: "web3journalist",
  description: "ChainPulse — autonomous on-chain journalist (RSS, Helius, article generation, Supabase).",
  actions: web3journalistActions,
  providers: web3journalistProviders,
  services: [web3JournalistSchedulerService],
  routes: [createHeliusWebhookRoute()],
};

export default web3journalistPlugin;
