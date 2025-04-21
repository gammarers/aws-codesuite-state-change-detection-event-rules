import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported Omit
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, 'eventPattern'> {}
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

export interface CodePipelineStageExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  readonly targetStates?: CodePipelineStageExecutionState[];
}

export class CodePipelineStageExecutionStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelineStageExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new InvalidInternalDefinitionParameterError('eventPattern');
        }
        return {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Stage Execution State Change'],
          //          detail: {
          //            state: props.targetStates,
          //          },
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