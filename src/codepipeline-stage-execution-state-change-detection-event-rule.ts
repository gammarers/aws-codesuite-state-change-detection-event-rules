import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

export enum CodePipelineStageExecutionState {
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
  RESUMED = 'RESUMED',
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
  STOPPING = 'STOPPING',
  SUCCEEDED = 'SUCCEEDED',
}

export interface CodePipelineStageExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  readonly eventPattern?: never;
  readonly targetStates?: CodePipelineStageExecutionState[];
}

export class CodePipelineStageExecutionStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelineStageExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
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