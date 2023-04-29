import { ConfigModule } from '@nestjs/config'
import { ConfigurationService } from './configuration.service'
import { Global, Module } from '@nestjs/common'
import * as Joi from 'joi'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        
      }),
    }),
  ],
  controllers: [],
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
