
export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link?: string;
}

export interface AIUpdatesState {
  loading: boolean;
  error: string | null;
  newsItems: NewsItem[] | null;
  useSampleData: boolean;
}
