export interface Question {
  id: number;
  text: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
  evidence: string;
}

export interface ReadingPassage {
  title: string;
  content: string[];
}
