export default function Casestudy() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold">Casestudy</h2>
        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
          Khu vực này để bạn thêm các tình huống (case study), bài tập vận dụng, hoặc kịch bản thuyết trình.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Tình huống giả định</h3>
          <div className="mt-3 space-y-3 text-base text-foreground/85 leading-relaxed">
            <p>
              <b>A:</b> "Việt Nam có 54 dân tộc cùng chung sống hòa thuận, không xung đột — đó là bằng chứng rõ nhất cho
              thấy chính sách dân tộc của Đảng đã thành công hoàn toàn."
            </p>
            <p>
              <b>B:</b> "Không xung đột chưa có nghĩa là bình đẳng — chênh lệch kinh tế, văn hóa, giáo dục giữa các dân
              tộc vẫn còn rất lớn, không thể gọi là thành công hoàn toàn."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

