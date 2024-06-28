# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodePipelineStateChangeDetectionEventRule <a name="CodePipelineStateChangeDetectionEventRule" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

new CodePipelineStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelineStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps">CodePipelineStateChangeDetectionEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps">CodePipelineStateChangeDetectionEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

   {
     "resources": [ "r1" ],
     "detail": {
       "hello": [ 1 ]
     }
   }

And `addEventPattern` is called with the pattern:

   {
     "resources": [ "r2" ],
     "detail": {
       "foo": [ "bar" ]
     }
   }

The resulting event pattern will be:

   {
     "resources": [ "r1", "r2" ],
     "detail": {
       "hello": [ 1 ],
       "foo": [ "bar" ]
     }
   }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

CodePipelineStateChangeDetectionEventRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

CodePipelineStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

CodePipelineStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRule } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

CodePipelineStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### CodePipelineStateChangeDetectionEventRuleProps <a name="CodePipelineStateChangeDetectionEventRuleProps" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelineStateChangeDetectionEventRuleProps } from '@gammarers/aws-codepipeline-state-change-detection-event-rule'

const codePipelineStateChangeDetectionEventRuleProps: CodePipelineStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |

---

##### `crossStackScope`<sup>Optional</sup> <a name="crossStackScope" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern
- *Default:* No additional filtering based on an event pattern.

Additional restrictions for the event to route to the specified target.

The method that generates the rule probably imposes some type of event
filtering. The filtering implied by what you pass here is added
on top of that filtering.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html)

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* None.

The schedule or rate (frequency) that determines when EventBridge runs the rule.

You must specify this property, the `eventPattern` property, or both.

For more information, see Schedule Expression Syntax for
Rules in the Amazon EventBridge User Guide.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html)

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@gammarers/aws-codepipeline-state-change-detection-event-rule.CodePipelineStateChangeDetectionEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---



