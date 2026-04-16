import type { Question } from './types';

export const questions: Question[] = [
  // Easy (1-10) - MCQ
  {
    id: 'q1',
    type: 'mcq',
    difficulty: 'easy',
    prompt:
      'Theo chủ nghĩa Mác - Lênin, yếu tố quyết định sự hình thành và biến đổi của dân tộc là gì?',
    options: ['Ý thức dân tộc', 'Phương thức sản xuất', 'Tôn giáo', 'Địa lý'],
    correctIndex: 1,
    explanation:
      'Chủ nghĩa Mác - Lênin khẳng định sự biến đổi của phương thức sản xuất là nguyên nhân quyết định sự biến đổi của cộng đồng dân tộc.',
  },
  {
    id: 'q2',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Bình đẳng dân tộc theo Cương lĩnh của V.I. Lênin chủ yếu nhấn mạnh vào điều gì?',
    options: ['Bình đẳng về mặt pháp lý', 'Bình đẳng thực tế trên mọi lĩnh vực', 'Bình đẳng chỉ về kinh tế', 'Bình đẳng chỉ về văn hóa'],
    correctIndex: 1,
    explanation:
      'Lênin nhấn mạnh bình đẳng dân tộc phải là bình đẳng thực tế, không chỉ dừng ở bình đẳng hình thức trên pháp luật.',
  },
  {
    id: 'q3',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đặc điểm cư trú nổi bật của các dân tộc ở Việt Nam là gì?',
    options: ['Tập trung riêng biệt từng dân tộc', 'Xen kẽ và phân tán trên cùng địa bàn', 'Chỉ sống ở đồng bằng sông Hồng', 'Chỉ sống ở Tây Nguyên'],
    correctIndex: 1,
    explanation: 'Các dân tộc ở Việt Nam không có lãnh thổ riêng mà cư trú xen kẽ lẫn nhau.',
  },
  {
    id: 'q4',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Việt Nam hiện nay có bao nhiêu tôn giáo được Nhà nước công nhận tư cách pháp nhân?',
    options: ['13', '16', '20', '54'],
    correctIndex: 1,
    explanation: 'Theo số liệu cập nhật, Việt Nam có 16 tôn giáo được công nhận tư cách pháp nhân.',
  },
  {
    id: 'q5',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Theo Đảng Cộng sản Việt Nam, tín ngưỡng và tôn giáo sẽ tồn tại như thế nào?',
    options: ['Sẽ biến mất ngay khi dân trí cao', 'Tồn tại lâu dài cùng dân tộc', 'Chỉ tồn tại ở vùng miền núi', 'Không được công nhận'],
    correctIndex: 1,
    explanation: 'Đảng khẳng định tín ngưỡng, tôn giáo là nhu cầu tinh thần và sẽ tồn tại lâu dài cùng dân tộc.',
  },
  {
    id: 'q6',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Thách thức lớn nhất hiện nay trong chính sách dân tộc của Việt Nam là gì?',
    options: ['Xóa bỏ hoàn toàn tôn giáo', 'Thu hẹp khoảng cách phát triển giữa các dân tộc', 'Tăng số lượng tín đồ', 'Giảm số lượng dân tộc'],
    correctIndex: 1,
    explanation: 'Khoảng cách phát triển kinh tế - xã hội giữa các dân tộc vẫn là thách thức lớn nhất hiện nay.',
  },
  {
    id: 'q7',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đảng và Nhà nước kiên quyết đấu tranh với hành vi nào sau đây?',
    options: ['Lợi dụng dân tộc, tôn giáo để chia rẽ khối đại đoàn kết', 'Xây dựng cơ sở thờ tự', 'Tổ chức lễ hội truyền thống', 'Học tập giáo lý tôn giáo'],
    correctIndex: 0,
    explanation: 'Đảng nghiêm cấm mọi hành vi lợi dụng dân tộc và tôn giáo để chia rẽ dân tộc.',
  },
  {
    id: 'q8',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Công tác tôn giáo là trách nhiệm của ai theo quan điểm của Đảng?',
    options: ['Chỉ Ban Tôn giáo', 'Toàn hệ thống chính trị', 'Chỉ các chức sắc tôn giáo', 'Chỉ Mặt trận Tổ quốc'],
    correctIndex: 1,
    explanation: 'Công tác tôn giáo là trách nhiệm chung của toàn Đảng, toàn dân, toàn quân và hệ thống chính trị.',
  },
  {
    id: 'q9',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đặc điểm nổi bật của tín đồ các tôn giáo ở Việt Nam là gì?',
    options: ['Chủ yếu là người giàu có', 'Phần lớn là nhân dân lao động có tinh thần yêu nước', 'Chỉ sống ở thành thị', 'Không tham gia xây dựng đất nước'],
    correctIndex: 1,
    explanation: 'Đa số tín đồ các tôn giáo là nhân dân lao động, có lòng yêu nước và gắn bó với dân tộc.',
  },
  {
    id: 'q10',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Mục tiêu cao nhất của chính sách dân tộc theo Đảng là gì?',
    options: ['Xây dựng khối đại đoàn kết toàn dân tộc', 'Phát triển kinh tế riêng cho từng dân tộc', 'Cho phép ly khai dân tộc', 'Tập trung chỉ vào an ninh biên giới'],
    correctIndex: 0,
    explanation: 'Xây dựng và củng cố khối đại đoàn kết toàn dân tộc là mục tiêu xuyên suốt và cao nhất.',
  },

  // Medium (11-15) - MCQ
  {
    id: 'q11',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Bình đẳng dân tộc theo Lênin đòi hỏi phải thực hiện điều gì quan trọng nhất?',
    options: ['Chỉ ban hành luật', 'Tạo điều kiện giúp các dân tộc chậm phát triển vươn lên', 'Để các dân tộc tự phát triển', 'Tập trung chỉ vào dân tộc đa số'],
    correctIndex: 1,
    explanation:
      'Bình đẳng thực tế đòi hỏi phải giúp đỡ các dân tộc thiểu số để thu hẹp khoảng cách phát triển.',
  },
  {
    id: 'q12',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Việc các dân tộc cư trú xen kẽ nhau ở Việt Nam mang lại hậu quả tiêu cực nào?',
    options: ['Dễ bị các thế lực thù địch lợi dụng chia rẽ', 'Không có hậu quả tiêu cực', 'Chỉ tạo thuận lợi giao lưu', 'Làm mất bản sắc văn hóa'],
    correctIndex: 0,
    explanation: 'Xen kẽ tạo điều kiện giao lưu nhưng cũng dễ bị lợi dụng gây chia rẽ.',
  },
  {
    id: 'q13',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Quyền tự do tín ngưỡng, tôn giáo phải được thực hiện trong khuôn khổ nào?',
    options: ['Pháp luật và lợi ích quốc gia - dân tộc', 'Ý muốn cá nhân của tín đồ', 'Yêu cầu của tổ chức tôn giáo quốc tế', 'Chỉ theo giáo lý tôn giáo'],
    correctIndex: 0,
    explanation: 'Quyền tự do phải gắn với pháp luật và lợi ích chung của quốc gia.',
  },
  {
    id: 'q14',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Thách thức lớn nhất hiện nay trong mối quan hệ dân tộc - tôn giáo là gì?',
    options: ['Thu hẹp khoảng cách phát triển kinh tế - xã hội', 'Xóa bỏ hoàn toàn tín ngưỡng', 'Tăng số lượng tôn giáo mới', 'Giảm số lượng tín đồ'],
    correctIndex: 0,
    explanation: 'Khoảng cách phát triển vẫn là thách thức lớn nhất cần ưu tiên giải quyết.',
  },
  {
    id: 'q15',
    type: 'mcq',
    difficulty: 'medium',
    prompt: '“Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo” thuộc quan điểm nào của Đảng?',
    options: ['Quan điểm chiến lược, cơ bản, lâu dài và cấp bách', 'Quan điểm tạm thời', 'Quan điểm chỉ mang tính kinh tế', 'Quan điểm chỉ mang tính an ninh'],
    correctIndex: 0,
    explanation: 'Đây là quan điểm chiến lược được Đảng nhấn mạnh nhiều lần.',
  },

  // Hard (16-18) - Short answer
  {
    id: 'q16',
    type: 'short',
    difficulty: 'hard',
    prompt:
      'Trả lời bằng một từ: Điều cốt lõi nhất mà Đảng hướng tới khi giải quyết mối quan hệ dân tộc - tôn giáo là gì?',
    answer: 'Đoàn kết',
    explanation: 'Đoàn kết dân tộc và đoàn kết tôn giáo là nội dung cốt lõi xuyên suốt.',
  },
  {
    id: 'q17',
    type: 'short',
    difficulty: 'hard',
    prompt: 'Trả lời bằng một từ: Mục tiêu cao nhất của chính sách dân tộc hiện nay là gì?',
    answer: 'Bình đẳng',
    explanation: 'Bình đẳng thực tế (không chỉ hình thức) là mục tiêu cao nhất.',
  },
  {
    id: 'q18',
    type: 'short',
    difficulty: 'hard',
    prompt:
      'Trả lời bằng một từ: Hành vi nguy hiểm nhất mà Đảng kiên quyết đấu tranh trong lĩnh vực dân tộc - tôn giáo là gì?',
    answer: 'Lợi dụng',
    explanation: 'Đảng kiên quyết đấu tranh với hành vi lợi dụng dân tộc và tôn giáo vào mục đích chính trị.',
  },
];

export const questionById = new Map(questions.map((q) => [q.id, q]));

