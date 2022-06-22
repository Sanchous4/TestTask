import { Component } from '@angular/core';
import { FeaturesService } from './imports/services/features.service';
import { features } from './imports/types/features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  features: features = {
    gender: [],
    clothes: [],
    position: [],
    view: [],
  };

  readonly defaultValues = {
    gender: 'Пол',
    clothes: 'Одежда',
    position: 'Позиция',
    view: 'Вид',
  };

  constructor(private featuresService: FeaturesService) {}

  ngOnInit() {
    this.featuresService.getFeatures().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        const filter = response[i].filters;
        switch (response[i].code) {
          case 'gender_id':
            this.features.gender = filter;
            break;
          case 'cloth_id':
            this.features.clothes = filter;
            break;
          case 'pose_id':
            this.features.position = filter;
            break;
          case 'view_id':
            this.features.view = filter;
            break;
          default:
            console.log(
              `[WARNING] Some data of response can't be added ${response}`
            );
        }
      }
    });
  }
}
