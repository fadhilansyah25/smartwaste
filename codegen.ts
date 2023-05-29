module.exports = {
  schema: [
    {
      'https://champion-piranha-28.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret':
            'l1m3nwk3760ZUuiHSU4QAEqz50EsRD4vWb7A7oo9ncqA7UnFb94LQ8O9iU34mMZI',
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
