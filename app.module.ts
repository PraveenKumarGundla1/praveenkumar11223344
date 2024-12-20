import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { TableOne } from './post/entities/table-one.entity';
import { TableTwo } from './post/entities/table-two.entity';
import { TableThree } from './post/entities/table-three.entity';
import { TableFour } from './post/entities/table-four.entity';
import { TableFive } from './post/entities/table-five.entity';
import { TableSix } from './post/entities/table-six.entity';
import { TableSeven } from './post/entities/table-seven.entity';
import { TableEight } from './post/entities/table-eight.entity';
import { TableNine } from './post/entities/table-nine.entity';
import { TableTen } from './post/entities/table-ten.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          TableOne,
          TableTwo,
          TableThree,
          TableFour,
          TableFive,
          TableSix,
          TableSeven,
          TableEight,
          TableNine,
          TableTen,
        ],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PostModule,
  ],
})
export class AppModule {}
