export interface SpaceXMission {
    mission_name: string;
    flight_number: string;
    launch_year: string;
    links: {
      mission_patch_small: string;
      article_link?: string;
      wikipedia?: string;
      video_link?: string;
    };
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    launch_site: {
      site_name: string;
    };
    details?: string;
  }
  