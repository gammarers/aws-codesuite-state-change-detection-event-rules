import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * Execution states for a CodePipeline pipeline.
 * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
 */
export enum CodePipelinePipelineExecutionState {
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
  RESUMED = 'RESUMED',
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
  STOPPING = 'STOPPING',
  SUCCEEDED = 'SUCCEEDED',
  SUPERSEDED = 'SUPERSEDED',
}

/**
 * Properties for defining an EventBridge rule that detects CodePipeline pipeline execution state changes.
 * The event pattern is fixed to `aws.codepipeline` / "CodePipeline Pipeline Execution State Change";
 * do not pass `eventPattern` in props.
 */
export interface CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  /**
   * Optional list of pipeline execution states to filter on.
   * If omitted, the rule matches all pipeline execution state changes.
   */
  readonly targetStates?: CodePipelinePipelineExecutionState[];
}

/**
 * EventBridge rule that triggers on CodePipeline pipeline execution state change events.
 * Use this to react to pipeline-level state transitions (e.g. STARTED, SUCCEEDED, FAILED).
 */
export class CodePipelinePipelineExecutionStateChangeDetectionEventRule extends events.Rule {
  /**
   * Creates an EventBridge rule for CodePipeline pipeline execution state changes.
   * @param scope - Construct scope (e.g. Stack).
   * @param id - Construct id.
   * @param props - Rule properties; do not set `eventPattern`.
   */
  constructor(scope: Construct, id: string, props: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new Error('eventPattern is not supported for this rule');
        }
        return {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Pipeline Execution State Change'],
          detail: (() => {
            if (props.targetStates) {
              return {
                state: props.targetStates,
              };
            }
            return undefined;
          })(),
        };
      })(),
    });
  }
}