import { IFetchElkArgs } from "@erxes/api-utils/src/types";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

import { initBroker } from "./messageBroker";
import { generateModels } from "./connectionResolver";

export let debug;
export let mainDb;

export let es: {
  client;
  fetchElk(args: IFetchElkArgs): Promise<any>;
  getMappings(index: string): Promise<any>;
  getIndexPrefix(): string;
};

export let serviceDiscovery;

export default {
  name: "segments",
  permissions: {
    segments: {
      name: "segments",
      description: "Segments",
      actions: [
        {
          name: "segmentsAll",
          description: "All",
          use: ["showSegments", "manageSegments"],
        },
        {
          name: "manageSegments",
          description: "Manage segments",
        },
        {
          name: "showSegments",
          description: "Show segments list",
        },
      ],
    },
  },
  graphql: async (sd) => {
    serviceDiscovery = sd;

    return {
      typeDefs: await typeDefs(sd),
      resolvers: await resolvers(sd),
    };
  },
  apolloServerContext: async (context) => {
    const models = await generateModels('os');

    context.models = models;

    return context;
  },
  onServerInit: async (options) => {
    initBroker(options.messageBrokerClient);

    mainDb = options.db;
    es = options.elasticsearch;
    debug = options.debug;
  },
};