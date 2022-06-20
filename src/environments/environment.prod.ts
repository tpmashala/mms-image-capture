import { ImageService as ImageMockService} from "src/app/service/image.mock.service";
import { ImageService } from "src/app/service/image.service";

export const environment = {
  production: true,
  providers: [
    {provide: ImageMockService, useClass: ImageService}
  ]
};
