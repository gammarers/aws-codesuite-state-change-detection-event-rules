import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * Execution states for a CodePipeline stage.
 * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
 */
export enum CodePipelineStageExecutionState {
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
  RESUMED = 'RESUMED',
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
  STOPPING = 'STOPPING',
  SUCCEEDED = 'SUCCEEDED',
}

/**
 * Properties for defining an EventBridge rule that detects CodePipeline stage execution state changes.
 * The event pattern is fixed to `aws.codepipeline` / "CodePipeline Stage Execution State Change";
 * do not pass `eventPattern` in props.
 */
export interface CodePipelineStageExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  /**
   * Optional list of stage execution states to filter on.
   * If omitted, the rule matches all stage execution state changes.
   */
  readonly targetStates?: CodePipelineStageExecutionState[];
}

/**
 * EventBridge rule that triggers on CodePipeline stage execution state change events.
 * Use this to react to stage-level state transitions (e.g. STARTED, SUCCEEDED, FAILED).
 */
export class CodePipelineStageExecutionStateChangeDetectionEventRule extends events.Rule {
  /**
   * Creates an EventBridge rule for CodePipeline stage execution state changes.
   * @param scope - Construct scope (e.g. Stack).
   * @param id - Construct id.
   * @param props - Rule properties; do not set `eventPattern`.
   */
  constructor(scope: Construct, id: string, props: CodePipelineStageExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new Error('eventPattern is not supported for this rule');
        }
        return {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Stage Execution State Change'],
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