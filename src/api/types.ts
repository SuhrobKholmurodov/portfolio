export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
}

export interface GiphyGif {
  id: string;
  images: {
    downsized: {
      url: string;
    };
  };
}

export interface GiphyResponse {
  data: GiphyGif[];
}
