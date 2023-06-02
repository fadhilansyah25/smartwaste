import {CodegenConfig} from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();

const generateQueryTypeDef = {
  './src/services/generated/mitra_query.d.ts': {
    documents: './src/services/apollo/mitra_query.graphql',
    plugins: ['typescript-graphql-files-modules'],
  },
};

const config: CodegenConfig = {
  schema: [
    {
      [process.env.HASURA_URI as string]: {
        headers: {
          ['content-type']: 'application/json',
          ['x-hasura-admin-secret']: `${
            process.env.HASURA_ADMIN_SECRET as string
          }`,
        },
      },
    },
  ],
  documents: [
    // './src/**/*.graphql.ts',
    // './src/**/*.gql.ts',
    './src/**/*.graphql',
    './src/**/*.gql',
  ],
  generates: {
    './src/services/generated/': {
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: false,
        gqlTagName: 'gql',
      },
      config: {
        documentMode: 'graphQLTag',
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
      // plugins: [
      //   'typescript',
      //   'typescript-operations',
      //   'typescript-react-apollo',
      // ],
      // config: {
      //   skipTypename: false,
      //   withHooks: true,
      //   withHOC: false,
      //   withComponent: false,
      // },
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
    ...generateQueryTypeDef,
  },
};

export default config;
