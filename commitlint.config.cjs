const Configuration = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-jira-rules'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [2, 'always', ['feat', 'test', 'fix', 'docs', 'refactor', 'chore', 'style', 'perf', 'build']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:[A-Z]+-\d+\s+)?(\w*)(?:\(([^)]+)\))?!?:\s(.+)$/,
      issuePrefixes: ['SGBG-'],
    },
  },
  prompt: {
    messages: {
      questions: {
        type: {
          description: 'feat/test/fix/docs/refactor/chore/style/perf/build 중 하나를 이용하세요.',
        },
      },
    },
  },
};

module.exports = Configuration;
