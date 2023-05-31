import {CodegenConfig} from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();

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
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
