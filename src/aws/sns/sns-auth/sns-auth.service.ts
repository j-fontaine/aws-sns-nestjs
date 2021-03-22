import { Injectable } from '@nestjs/common';
import { Config, SharedIniFileCredentials, SNS } from 'aws-sdk';

@Injectable()
export class SnsAuthService {
  private myConfig = {
    apiVersion: process.env.SNS_API_VERSION,
    maxRetries: Number(process.env.SNS_MAX_RETIRES),
    httpOptions: {
      connectTimeout: Number(process.env.SNS_CONNECT_TIMEOUT),
      timeout: Number(process.env.SNS_TIMEOUT)
    },
    credentials: new SharedIniFileCredentials({ filename: 'P:\\repo_GitHub\\aws-sns-nestjs\\.aws\\credentials', profile: 'sns_profile' }),
    region: process.env.AWS_REGION
  };
  private instance: SNS = null;

  getInstance(): SNS {
    console.log(`CONFIG=${this.myConfig}`);
    if (!this.instance) {
      const fullConfig = new Config(this.myConfig);
      fullConfig.region = 'us-gov-west-1';
      this.instance = new SNS(fullConfig);
    }
    return this.instance;
  }
}
