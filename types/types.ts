export interface BlogPost {
  publishedAt?: string,
  summary?: string,
  title?: string,
  slug?: string,
  wordCount: number
  readingTime:{
    minutes: number,
    text: string,
    time: number,
    words: number

  }
}