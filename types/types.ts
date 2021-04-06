export interface BlogPost {
  publishedAt?: string,
  summary?: string,
  title?: string,
  slug: string,
  image?: string
  authorImage?:string
  author: string,
  wordCount: number
  authorProfession: string
  readingTime:{
    minutes: number,
    text: string,
    time: number,
    words: number

  }
}