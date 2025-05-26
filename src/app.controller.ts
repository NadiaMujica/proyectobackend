import { Controller, Get } from '@nestjs/common';
import { AppService, iTrack } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('api')
  getTracks(): iTrack[] {
    return this.appService.getTracks();
  }

}
