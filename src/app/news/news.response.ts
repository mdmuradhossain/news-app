export interface NewsResponse {
  articles: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
  };
}
