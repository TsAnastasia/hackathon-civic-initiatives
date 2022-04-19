export interface Doc {
  title: string;
  resource?: string;
}

export type Docs = { [key: string]: Doc };
