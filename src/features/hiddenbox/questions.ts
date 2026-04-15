import type { Question } from './types';

export const questions: Question[] = [
  // Easy (1-10) - MCQ
  {
    id: 'q1',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đảng Cộng sản Việt Nam coi việc giải quyết mối quan hệ dân tộc và tôn giáo là vấn đề có tính chất gì?',
    options: ['Chỉ mang tính kinh tế', 'Chiến lược, cơ bản, lâu dài và cấp bách', 'Chỉ mang tính văn hóa', 'Tạm thời'],
    correctIndex: 1,
    explanation:
      'Đảng khẳng định giải quyết quan hệ dân tộc - tôn giáo là vấn đề chiến lược, cơ bản, lâu dài và cấp bách.',
  },
  {
    id: 'q2',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Theo Đảng ta, khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo là:',
    options: ['Vấn đề không quan trọng', 'Vấn đề chiến lược của cách mạng Việt Nam', 'Chỉ dành cho vùng miền núi', 'Chỉ mang tính tôn giáo'],
    correctIndex: 1,
  },
  {
    id: 'q3',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đảng và Nhà nước ta chủ trương nghiêm trị những hành vi nào?',
    options: ['Chia rẽ, phá hoại khối đại đoàn kết dân tộc', 'Xây dựng kinh tế', 'Phát triển giáo dục', 'Tăng cường quốc phòng'],
    correctIndex: 0,
  },
  {
    id: 'q4',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Tôn giáo ở Việt Nam hiện nay có bao nhiêu tôn giáo được công nhận tư cách pháp nhân?',
    options: ['5', '13', '20', '54'],
    correctIndex: 1,
  },
  {
    id: 'q5',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đặc điểm nổi bật của tín đồ các tôn giáo ở Việt Nam là gì?',
    options: ['Chủ yếu là giai cấp tư sản', 'Phần lớn là nhân dân lao động, có lòng yêu nước', 'Chỉ sống ở thành thị', 'Không tham gia xây dựng đất nước'],
    correctIndex: 1,
  },
  {
    id: 'q6',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Các tôn giáo ở Việt Nam chủ yếu chung sống như thế nào?',
    options: ['Thường xuyên xung đột', 'Đa dạng, đan xen, hòa bình', 'Tách biệt hoàn toàn', 'Chỉ tồn tại riêng lẻ'],
    correctIndex: 1,
  },
  {
    id: 'q7',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Công tác tôn giáo là trách nhiệm của ai?',
    options: ['Chỉ của Ban Tôn giáo', 'Toàn Đảng, toàn dân, toàn quân và hệ thống chính trị', 'Chỉ của Chính phủ', 'Chỉ của Mặt trận Tổ quốc'],
    correctIndex: 1,
  },
  {
    id: 'q8',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Đảng ta khẳng định tín ngưỡng, tôn giáo sẽ:',
    options: ['Biến mất ngay', 'Tồn tại lâu dài cùng dân tộc', 'Chỉ tồn tại ở miền núi', 'Không được công nhận'],
    correctIndex: 1,
  },
  {
    id: 'q9',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Một trong những nhiệm vụ quan trọng của chính sách dân tộc là:',
    options: ['Xóa bỏ hoàn toàn tôn giáo', 'Đẩy mạnh phát triển kinh tế - xã hội vùng dân tộc thiểu số', 'Cấm tất cả hoạt động tôn giáo', 'Chỉ tập trung vào miền xuôi'],
    correctIndex: 1,
  },
  {
    id: 'q10',
    type: 'mcq',
    difficulty: 'easy',
    prompt: 'Việc giải quyết mối quan hệ dân tộc - tôn giáo phải đặt trong khuôn khổ nào?',
    options: ['Cộng đồng quốc gia - dân tộc thống nhất theo định hướng XHCN', 'Chỉ riêng vùng dân tộc thiểu số', 'Chỉ theo yêu cầu quốc tế', 'Theo ý muốn của từng tôn giáo'],
    correctIndex: 0,
  },

  // Medium (11-15) - MCQ
  {
    id: 'q11',
    type: 'mcq',
    difficulty: 'medium',
    prompt:
      'Quan điểm “Giải quyết mối quan hệ dân tộc và tôn giáo phải đặt trong mối quan hệ với cộng đồng quốc gia - dân tộc thống nhất” nhằm mục đích gì?',
    options: ['Cho phép ly khai dân tộc', 'Giữ vững độc lập, chủ quyền và thống nhất đất nước', 'Chỉ phát triển kinh tế', 'Bỏ qua quyền tự do tín ngưỡng'],
    correctIndex: 1,
  },
  {
    id: 'q12',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Việc bảo đảm quyền tự do tín ngưỡng, tôn giáo phải gắn với điều gì?',
    options: ['Pháp luật', 'Ý muốn cá nhân', 'Yêu cầu quốc tế', 'Lợi ích của một tôn giáo'],
    correctIndex: 0,
  },
  {
    id: 'q13',
    type: 'mcq',
    difficulty: 'medium',
    prompt: '“Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo” là vấn đề có tính chất gì theo Đảng ta?',
    options: ['Chiến lược, cơ bản, lâu dài và cấp bách', 'Chỉ mang tính tạm thời', 'Chỉ mang tính kinh tế', 'Không quan trọng'],
    correctIndex: 0,
  },
  {
    id: 'q14',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Nội dung cốt lõi của công tác tôn giáo theo Đảng là gì?',
    options: ['Công tác vận động quần chúng', 'Cấm hoạt động tôn giáo', 'Chỉ xây dựng cơ sở thờ tự', 'Chỉ quản lý chức sắc'],
    correctIndex: 0,
  },
  {
    id: 'q15',
    type: 'mcq',
    difficulty: 'medium',
    prompt: 'Đảng ta nghiêm cấm hành vi nào liên quan đến tín ngưỡng, tôn giáo?',
    options: ['Lợi dụng tín ngưỡng, tôn giáo để chia rẽ dân tộc, gây rối an ninh', 'Xây dựng chùa chiền', 'Tổ chức lễ hội', 'Học giáo lý'],
    correctIndex: 0,
  },

  // Hard (16-18) - Short answer
  {
    id: 'q16',
    type: 'short',
    difficulty: 'hard',
    prompt: 'Một từ: Quan điểm cốt lõi nhất của Đảng khi giải quyết mối quan hệ dân tộc - tôn giáo là gì?',
    answer: 'Đoàn kết',
  },
  {
    id: 'q17',
    type: 'short',
    difficulty: 'hard',
    prompt: 'Một từ: Mục tiêu cao nhất khi giải quyết mối quan hệ dân tộc và tôn giáo theo Đảng là gì?',
    answer: 'Đoàn kết',
  },
  {
    id: 'q18',
    type: 'short',
    difficulty: 'hard',
    prompt:
      'Một từ: Hành vi bị Đảng và Nhà nước kiên quyết đấu tranh trong lĩnh vực dân tộc - tôn giáo là gì?',
    answer: 'Lợi dụng',
  },
];

export const questionById = new Map(questions.map((q) => [q.id, q]));

