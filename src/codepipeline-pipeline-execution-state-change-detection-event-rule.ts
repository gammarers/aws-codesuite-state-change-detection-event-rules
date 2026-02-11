import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

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

export interface CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  readonly eventPattern?: never;
  readonly targetStates?: CodePipelinePipelineExecutionState[];
}

export class CodePipelinePipelineExecutionStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
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