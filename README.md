# AWS CodePipeline State Change Detection Event Rules

[![GitHub](https://img.shields.io/github/license/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules?style=flat-square)](https://github.com/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/aws-codepipeline-state-change-detection-event-rules?style=flat-square)](https://www.npmjs.com/package/aws-codepipeline-state-change-detection-event-rules)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules?sort=semver&style=flat-square)](https://github.com/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=aws-codepipeline-state-change-detection-event-rules)](https://constructs.dev/packages/aws-codepipeline-state-change-detection-event-rules)

An AWS CDK construct library that defines EventBridge rules to detect pipeline and stage execution state changes in AWS CodePipeline.

## Provided Constructs

| Construct | Description |
|-----------|-------------|
| `CodePipelinePipelineExecutionStateChangeDetectionEventRule` | Rule that detects pipeline-wide execution state changes (started, succeeded, failed, etc.) |
| `CodePipelineStageExecutionStateChangeDetectionEventRule` | Rule that detects per-stage execution state changes |

Both extend `events.Rule` and allow filtering by state via `targetStates` (all states when omitted). The event pattern is fixed by each construct; passing `eventPattern` in props is not supported and will throw at runtime.

## Installation

### TypeScript

**npm:**

```shell
npm install aws-codepipeline-state-change-detection-event-rules
```

**yarn:**

```shell
yarn add aws-codepipeline-state-change-detection-event-rules
```

## Examples

### Pipeline execution state change detection

Example that invokes a Lambda when the pipeline execution state (started, succeeded, failed, canceled, etc.) changes. When `targetStates` is specified, the target is invoked only for those states.

```typescript
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events_targets from 'aws-cdk-lib/aws-events-targets';
import {
  CodePipelinePipelineExecutionState,
  CodePipelinePipelineExecutionStateChangeDetectionEventRule,
} from 'aws-codepipeline-state-change-detection-event-rules';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

const fn = new lambda.Function(stack, 'MyFunc', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`exports.handler = async () => {}`),
});

const rule = new CodePipelinePipelineExecutionStateChangeDetectionEventRule(
  stack,
  'PipelineStateChangeRule',
  {
    ruleName: 'my-pipeline-state-change-rule',
    targets: [new events_targets.LambdaFunction(fn)],
    // When omitted, all states. When specified, triggers only for those states.
    targetStates: [
      CodePipelinePipelineExecutionState.FAILED,
      CodePipelinePipelineExecutionState.SUCCEEDED,
    ],
  }
);
```

### Stage execution state change detection

Example that detects per-stage execution state changes and invokes a Lambda.

```typescript
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events_targets from 'aws-cdk-lib/aws-events-targets';
import {
  CodePipelineStageExecutionState,
  CodePipelineStageExecutionStateChangeDetectionEventRule,
} from 'aws-codepipeline-state-change-detection-event-rules';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

const fn = new lambda.Function(stack, 'MyFunc', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`exports.handler = async () => {}`),
});

const rule = new CodePipelineStageExecutionStateChangeDetectionEventRule(
  stack,
  'StageStateChangeRule',
  {
    ruleName: 'my-stage-state-change-rule',
    targets: [new events_targets.LambdaFunction(fn)],
    targetStates: [
      CodePipelineStageExecutionState.FAILED,
      CodePipelineStageExecutionState.SUCCEEDED,
    ],
  }
);
```

## Detectable states

### Pipeline execution states (CodePipelinePipelineExecutionState)

`CANCELED` / `FAILED` / `RESUMED` / `STARTED` / `STOPPED` / `STOPPING` / `SUCCEEDED` / `SUPERSEDED`

### Stage execution states (CodePipelineStageExecutionState)

`CANCELED` / `FAILED` / `RESUMED` / `STARTED` / `STOPPED` / `STOPPING` / `SUCCEEDED`

## API reference

See [API.md](./API.md) for details.

## License

This project is licensed under the Apache-2.0 License.
