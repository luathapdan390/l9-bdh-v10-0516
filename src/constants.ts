import { Question, ReadingPassage } from './types';

export const PASSAGE: ReadingPassage = {
  title: "Smartphones and Teenagers",
  content: [
    "Smartphones have become an essential part of daily life, especially for teenagers. According to a recent survey, over 80% of high school students own a smartphone. These devices offer numerous benefits. Firstly, they provide instant access to a vast amount of information, which is extremely helpful for school projects and homework. Secondly, smartphones allow teenagers to stay connected with family and friends through social media and messaging apps, regardless of the distance.",
    "However, the overuse of smartphones also brings several negative consequences. One major concern is the impact on sleep. Many teens stay up late scrolling through their feeds, leading to sleep deprivation, which affects their concentration at school the next day. Furthermore, excessive screen time can reduce physical activity, contributing to health issues like obesity. Another problem is cyberbullying, which has become more common as online interactions increase.",
    "To ensure that smartphones remain a useful tool rather than a harmful distraction, teenagers need to develop healthy digital habits. Parents and teachers should encourage students to set screen time limits and engage in offline activities such as reading, playing sports, or spending time with family. By finding a balance, teenagers can enjoy the advantages of technology without compromising their physical and mental well-being."
  ]
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is the passage mainly about?",
    options: [
      { key: "A", text: "The history of smartphones" },
      { key: "B", text: "The impacts of smartphones on teenagers" },
      { key: "C", text: "How to buy a good smartphone" },
      { key: "D", text: "The benefits of social media apps" }
    ],
    correctAnswer: "B",
    explanation: "Ý chính của đoạn văn là Tác động (cả mặt tích cực lẫn tiêu cực) của điện thoại thông minh đối với thanh thiếu niên.",
    evidence: "Tổng quan toàn bộ văn bản đề cập đến cả lợi ích và tác hại."
  },
  {
    id: 2,
    text: "According to the text, how many high school students own a smartphone?",
    options: [
      { key: "A", text: "Exactly 80%" },
      { key: "B", text: "Less than 80%" },
      { key: "C", text: "More than 80%" },
      { key: "D", text: "About 18%" }
    ],
    correctAnswer: "C",
    explanation: "Over 80% nghĩa là 'Hơn 80%'.",
    evidence: "Dẫn chứng (Đoạn 1): \"...over 80% of high school students own a smartphone.\""
  },
  {
    id: 3,
    text: "What does the word 'they' in the first paragraph refer to?",
    options: [
      { key: "A", text: "teenagers" },
      { key: "B", text: "high school students" },
      { key: "C", text: "benefits" },
      { key: "D", text: "these devices (smartphones)" }
    ],
    correctAnswer: "D",
    explanation: "'They' thay thế cho chủ ngữ 'These devices' ở câu trước đó.",
    evidence: "Dẫn chứng (Đoạn 1): \"These devices offer numerous benefits. Firstly, they provide...\""
  },
  {
    id: 4,
    text: "How do smartphones help teenagers with their studies?",
    options: [
      { key: "A", text: "By doing homework for them" },
      { key: "B", text: "By providing instant access to information" },
      { key: "C", text: "By allowing them to play games" },
      { key: "D", text: "By connecting them with teachers" }
    ],
    correctAnswer: "B",
    explanation: "Điện thoại giúp truy cập thông tin nhanh chóng cho việc học.",
    evidence: "Dẫn chứng (Đoạn 1): \"...provide instant access to a vast amount of information, which is extremely helpful for school projects...\""
  },
  {
    id: 5,
    text: "The word 'deprivation' in paragraph 2 is closest in meaning to ________.",
    options: [
      { key: "A", text: "lack" },
      { key: "B", text: "quality" },
      { key: "C", text: "amount" },
      { key: "D", text: "improvement" }
    ],
    correctAnswer: "A",
    explanation: "'Sleep deprivation' là sự thiếu ngủ. 'Lack' đồng nghĩa với sự thiếu hụt.",
    evidence: "Ngữ cảnh: Thiếu ngủ dẫn đến mất tập trung."
  },
  {
    id: 6,
    text: "According to the passage, what is the consequence of staying up late to use smartphones?",
    options: [
      { key: "A", text: "It makes students feel hungry." },
      { key: "B", text: "It improves their grades." },
      { key: "C", text: "It affects their concentration at school." },
      { key: "D", text: "It helps them sleep better." }
    ],
    correctAnswer: "C",
    explanation: "Thức khuya dùng điện thoại gây thiếu ngủ và mất tập trung.",
    evidence: "Dẫn chứng (Đoạn 2): \"...leading to sleep deprivation, which affects their concentration at school the next day.\""
  },
  {
    id: 7,
    text: "Which of the following is NOT mentioned as a negative consequence of smartphone overuse?",
    options: [
      { key: "A", text: "Poor eyesight" },
      { key: "B", text: "Sleep deprivation" },
      { key: "C", text: "Less physical activity" },
      { key: "D", text: "Cyberbullying" }
    ],
    correctAnswer: "A",
    explanation: "Bài đọc nhắc đến B, C, D nhưng không nhắc đến 'Poor eyesight'.",
    evidence: "Phương pháp loại trừ dựa trên thông tin trong Đoạn 2."
  },
  {
    id: 8,
    text: "What does the word 'which' in the second paragraph refer to?",
    options: [
      { key: "A", text: "screen time" },
      { key: "B", text: "obesity" },
      { key: "C", text: "cyberbullying" },
      { key: "D", text: "physical activity" }
    ],
    correctAnswer: "C",
    explanation: "'Which' thay thế cho danh từ đứng trước nó là 'cyberbullying'.",
    evidence: "Dẫn chứng (Đoạn 2): \"Another problem is cyberbullying, which has become...\""
  },
  {
    id: 9,
    text: "What should parents and teachers encourage teenagers to do?",
    options: [
      { key: "A", text: "Ban the use of smartphones completely" },
      { key: "B", text: "Buy the latest smartphones" },
      { key: "C", text: "Spend more time on social media" },
      { key: "D", text: "Set screen time limits and do offline activities" }
    ],
    correctAnswer: "D",
    explanation: "Khuyên đặt giới hạn thời gian và hoạt động thực tế.",
    evidence: "Dẫn chứng (Đoạn 3): \"Parents and teachers should encourage students to set screen time limits and engage in offline activities...\""
  },
  {
    id: 10,
    text: "What is the author's final advice for teenagers?",
    options: [
      { key: "A", text: "They should delete all messaging apps." },
      { key: "B", text: "They should find a balance between online and offline activities." },
      { key: "C", text: "They should only use smartphones for studying." },
      { key: "D", text: "They should stop communicating online." }
    ],
    correctAnswer: "B",
    explanation: "Lời khuyên cuối cùng là tìm sự cân bằng.",
    evidence: "Dẫn chứng (Đoạn 3 câu cuối): \"By finding a balance, teenagers can enjoy the advantages...\""
  }
];
