import { Service, ServiceType, type IAgentRuntime } from "@elizaos/core";

// TODO: implement in prompt-XX
export class Web3JournalistScheduler extends Service {
  static serviceType = ServiceType.UNKNOWN;
  capabilityDescription = "Schedules RSS polling, Helius webhook handling, and publish retries.";

  static async start(runtime: IAgentRuntime): Promise<Service> {
    return new Web3JournalistScheduler(runtime);
  }

  static async stop(_runtime: IAgentRuntime): Promise<void> {
    return undefined;
  }

  constructor(runtime?: IAgentRuntime) {
    super(runtime);
  }

  async stop(): Promise<void> {}
}

/** Service class constructor for Plugin.services */
export const web3JournalistSchedulerService: typeof Web3JournalistScheduler = Web3JournalistScheduler;
