export interface ArticleResponse {
  articles: {
    source: {
      id: string;
      name: string;
    };
    author: string;
  };
}
