import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

type omitKeys = 'eventPattern';

export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, omitKeys> {}

export class CodePipelineStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelineStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: {
        source: ['aws.codepipeline'],
        detailType: ['CodePipeline Pipeline Execution State Change'],
      },
    });
  }
}