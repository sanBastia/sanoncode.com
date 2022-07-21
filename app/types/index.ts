export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Article = {
  id?: Scalars['ID']
  title: Scalars['String']
  slug: Scalars['String']
  readTime: Scalars['Int']
  date: Scalars['String']
  excerpt?: Scalars['String']
  body?: Scalars['String']
}

export type Articles = Array<Article>
