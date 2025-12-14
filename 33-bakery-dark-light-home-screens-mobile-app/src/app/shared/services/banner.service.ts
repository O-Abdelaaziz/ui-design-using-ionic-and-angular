import {Injectable} from '@angular/core';
import {banners} from "../../seed/banners.seed";

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  getBanners() {
    return banners;
  }
}
