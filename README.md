# AWS CodePipeline Execution State Change Detection Event Rule

[![GitHub](https://img.shields.io/github/license/gammarers/aws-codepipeline-execution-state-change-detection-event-rule?style=flat-square)](https://github.com/gammarers/aws-codepipeline-execution-state-change-detection-event-rule/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-codepipeline-execution-state-change-detection-event-rule?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-codepipeline-execution-state-change-detection-event-rule)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-codepipeline-execution-state-change-detection-event-rule/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-codepipeline-execution-state-change-detection-event-rule/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-codepipeline-execution-state-change-detection-event-rule?sort=semver&style=flat-square)](https://github.com/gammarers/aws-codepipeline-execution-state-change-detection-event-rule/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-codepipeline-execution-state-change-detection-event-rule)](https://constructs.dev/packages/@gammarers/aws-codepipeline-execution-state-change-detection-event-rule)

This an AWS CodePipeline execution state change detection event rule

## Install

### TypeScript

#### install by npm

```shell
npm install @gammarers/aws-codepipeline-execution-state-change-detection-event-rule
```
#### install by yarn

```shell
yarn add @gammarers/aws-codepipeline-execution-state-change-detection-event-rule
```
#### install by pnpm

```shell
pnpm add @gammarers/aws-codepipeline-execution-state-change-detection-event-rule
```
#### install by bun

```shell
bun add @gammarers/aws-codepipeline-execution-state-change-detection-event-rule
```

## Example

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-execution-state-change-detection-event-rule';

const fn = new lambda.Function(this, 'MyFunc', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`exports.handler = handler.toString()`),
});

const rule = new CodePipelineExecutionStateChangeDetectionEventRule(stack, 'CodePipelineStateChangeDetectionEventRule', {
  ruleName: 'example-codepipeline-state-change-detection-event-rule',
  targets: new targets.LambdaFunction(fn),
});

```

## License

This project is licensed under the Apache-2.0 License.
