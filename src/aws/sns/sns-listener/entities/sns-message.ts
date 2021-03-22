import { MessageAttributeMap } from "aws-sdk/clients/sns";

export class SnsNotification {
  Type: string;
  MessageId: string;
  Token: string;
  TopicArn: string;
  Message: string;
  SubscribeURL: string;
  Timestamp: string;
  SignatureVersion: number;
  Signature: string;
  SigningCertURL: string;
  MessageAttributes: MessageAttributeMap;
}
