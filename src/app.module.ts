import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { LaunchResolver } from './launch/launch.resolver';
import { LaunchModule } from './launch/launch.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
      debug: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    LaunchModule,
  ],
  controllers: [AppController],
  providers: [AppService, LaunchResolver],
})
export class AppModule {}
