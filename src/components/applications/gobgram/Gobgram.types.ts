export type Post = {
  tweet: Tweet;
  user: User;
}

export type Tweet = {
  id: number;
  url: string;
  description: string;
  imageUrl: string;
  likes: number;
  replies: number;
}

export type User = {
  id: number;
  url: string;
  name: string;
  username: string;
  imageUrl: string;
}
