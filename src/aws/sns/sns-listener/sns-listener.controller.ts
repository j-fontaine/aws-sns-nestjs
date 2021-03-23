import { Controller, Get, HttpCode, HttpStatus, Post, Body, Query } from '@nestjs/common';
import { SnsListenerService } from './sns-listener.service';

@Controller('sns-listener')
export class SnsListenerController {
  constructor(private readonly snsListenerService: SnsListenerService) {}

  @Get('/status')
  reportStatus(): string {
    return this.snsListenerService.getListeningStatus();
  }

  @Get('/connect')
  @HttpCode(HttpStatus.ACCEPTED)
  connectSNS(@Query('arn') arn: string): void {
    console.log('Received subscribe message');
    this.snsListenerService.subscribeToSNS(arn);
  }

  /**
   * @param body is being translated from a text/plain UTF-8 encoding to
   * something that can be consumed via an express body-parser change
   * in the main.ts implementation
   */
  @Post()
  notificationInbox(@Body() body: string): void {
    console.log('Received Notification');
    this.snsListenerService.processNotification(JSON.parse(body));
  }

  // @Post()
  // handleNotification(@Body() _body: SnsMessage): string {
  //   return this.snsListenerService.routeNotification(_body);
  // }
}
