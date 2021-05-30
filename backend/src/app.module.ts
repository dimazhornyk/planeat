import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoryModule } from './categories/categories.module';
import { ProductModule } from './products/product.module';
import { UtensilModule } from './utensils/utensil.module';
import { RecipeModule } from './recipes/recipe.module';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
console.log({ MONGO_PASSWORD, MONGO_USERNAME });
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@planeat.f1hnx.mongodb.net`,
    ),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    CategoryModule,
    ProductModule,
    UtensilModule,
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
