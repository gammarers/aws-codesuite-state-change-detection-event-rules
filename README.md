# AWS CodeSuite State Change Detection Event Rule

[![GitHub](https://img.shields.io/github/license/gammarers/aws-codesuite-state-change-detection-event-rules?style=flat-square)](https://github.com/gammarers/aws-codesuite-state-change-detection-event-rules/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-codesuite-state-change-detection-event-rules?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-codesuite-state-change-detection-event-rules)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-codesuite-state-change-detection-event-rules/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-codesuite-state-change-detection-event-rules/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-codesuite-state-change-detection-event-rules?sort=semver&style=flat-square)](https://github.com/gammarers/aws-codesuite-state-change-detection-event-rules/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-codesuite-state-change-detection-event-rules)](https://constructs.dev/packages/@gammarers/aws-codesuite-state-change-detection-event-rules)

This an AWS CodePipeline execution state change detection event rule

## Install

### TypeScript

#### install by npm

```shell
npm install @gammarers/aws-codesuite-state-change-detection-event-rules
```
#### install by yarn

```shell
yarn add @gammarers/aws-codesuite-state-change-detection-event-rules
```
#### install by pnpm

```shell
pnpm add @gammarers/aws-codesuite-state-change-detection-event-rules
```
#### install by bun

```shell
bun add @gammarers/aws-codesuite-state-change-detection-event-rules
```

## Example

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules';

const fn = new lambda.Function(this, 'MyFunc', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`exports.handler = handler.toString()`),
});

const rule = new CodePipelineExecutionStateChangeDetectionEventRule(stack, 'CodePipelineStateChangeDetectionEventRule', {
  ruleName: 'example-codepipeline-state-change-detection-event-rules',
  targets: new targets.LambdaFunction(fn),
});

```

## License

This project is licensed under the Apache-2.0 License.
