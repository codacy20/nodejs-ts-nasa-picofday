import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LaunchResolver } from './launch.resolver';
import { LaunchService } from './launch.service';

@Module({
  imports: [HttpModule],
  providers: [LaunchService, LaunchResolver],
  exports: [LaunchService],
})
export class LaunchModule {}
