import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map, forkJoin, mergeMap, of } from 'rxjs';
import { SpacexLaunch, LaunchModel } from './launch.model';

@Injectable()
export class LaunchService {
  apiUrl = 'https://api.spacexdata.com/v3'; // TODO move to config

  constructor(private http: HttpService) {}

  private mapLaunch(launch: SpacexLaunch): LaunchModel {
    return {
      id: String(launch.flight_number || 0),
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  getAllLaunches(): Observable<LaunchModel[]> {
    return this.http
      .get<SpacexLaunch[]>(`${this.apiUrl}/launches`)
      .pipe(map(({ data }) => data.map(this.mapLaunch)));
  }

  getLaunchById(id: number): Observable<LaunchModel> {
    return this.http
      .get<SpacexLaunch>(`${this.apiUrl}/launches/${id}`)
      .pipe(map(({ data }) => this.mapLaunch(data)));
  }

  getLaunchByIds(ids: number[]) {
    return ids.length
      ? forkJoin(ids.map((id) => this.getLaunchById(id))).pipe(
          mergeMap((res) => of(res)),
        )
      : of([]);
  }
}
