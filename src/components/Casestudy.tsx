import casestudyImg from '@/PIC/Casestudy.jpeg';

export default function Casestudy() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold">Casestudy</h2>
        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
          Khu vực này để bạn thêm các tình huống (case study), bài tập vận dụng, hoặc kịch bản thuyết trình.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <div className="space-y-4">
            <section className="rounded-xl overflow-hidden border border-border bg-muted">
              <div className="px-4 py-3 border-b border-border bg-background/40">
                <div className="text-sm font-semibold text-foreground">Hình minh hoạ</div>
                <div className="text-xs text-muted-foreground mt-0.5">Tài liệu/ảnh phục vụ phần trình bày tình huống.</div>
              </div>
              <img src={casestudyImg} alt="Casestudy" className="w-full h-auto block" loading="lazy" />
            </section>

            <section className="rounded-xl border border-border bg-muted/30 p-4">
              <h3 className="text-base font-semibold">Tình huống giả định</h3>
              <div className="mt-3 space-y-3 text-base text-foreground/85 leading-relaxed">
                <p>
                  <b>A:</b> "Việt Nam có 54 dân tộc cùng chung sống hòa thuận, không xung đột — đó là bằng chứng rõ nhất
                  cho thấy chính sách dân tộc của Đảng đã thành công hoàn toàn."
                </p>
                <p>
                  <b>B:</b> "Không xung đột chưa có nghĩa là bình đẳng — chênh lệch kinh tế, văn hóa, giáo dục giữa các
                  dân tộc vẫn còn rất lớn, không thể gọi là thành công hoàn toàn."
                </p>
              </div>
            </section>

            <section className="rounded-xl border border-border bg-muted/30 p-4">
              <h3 className="text-base font-semibold">Trả lời</h3>
              <div className="mt-3 space-y-4 text-base text-foreground/85 leading-relaxed whitespace-pre-line">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-semibold">1. Phân xử: Ai đúng, ai sai?</div>
                  <div className="mt-1">
                    Nhận định của nhóm: Cả A và B đều đúng một phần.
                    {'\n\n'}
                    Quan điểm A đúng khi khẳng định thành tựu lớn về mặt chính trị: 54 dân tộc chung sống hòa bình, không
                    có xung đột sắc tộc là minh chứng rõ nét cho chính sách đại đoàn kết dân tộc và bình đẳng về quyền
                    chính trị. Tuy nhiên, A chưa chính xác khi dùng cụm từ “thành công hoàn toàn”, vì bình đẳng dân tộc là
                    quá trình lâu dài, không chỉ dừng lại ở việc không có xung đột.
                    {'\n'}
                    Quan điểm B đúng khi chỉ ra rằng bình đẳng thực tế vẫn còn khoảng cách lớn về kinh tế, giáo dục và văn
                    hóa giữa các dân tộc. Tuy nhiên, B có phần cực đoan khi phủ nhận gần như toàn bộ thành tựu của chính
                    sách dân tộc, vì sự ổn định chính trị chính là nền tảng quan trọng để tiếp tục thu hẹp những chênh
                    lệch đó.
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-semibold">2. Căn cứ lý luận: Bình đẳng dân tộc theo Cương lĩnh của Lênin</div>
                  <div className="mt-1">
                    Theo V.I. Lênin, bình đẳng dân tộc không chỉ là bình đẳng về mặt pháp lý mà phải là bình đẳng thực tế.
                    Các dân tộc đều có quyền lợi và nghĩa vụ ngang nhau trên mọi lĩnh vực. Để đạt được điều này, phải tạo
                    điều kiện giúp đỡ các dân tộc chậm phát triển hơn về kinh tế và văn hóa, nhằm thu hẹp khoảng cách.
                    {'\n'}
                    Không xung đột chỉ là điều kiện cần, chứ chưa phải là điều kiện đủ. Nếu chỉ duy trì được sự ổn định bề
                    mặt mà khoảng cách phát triển giữa các dân tộc vẫn lớn, thì đó mới chỉ là bình đẳng hình thức, chưa
                    đạt được mục tiêu thực sự của chủ nghĩa Mác - Lênin.
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-semibold">3. Nhận định của nhóm: Thách thức lớn nhất hiện nay</div>
                  <div className="mt-1">
                    Nhóm nhận định: Thách thức lớn nhất hiện nay là thực hiện bình đẳng thực tế thông qua việc thu hẹp
                    khoảng cách phát triển kinh tế - xã hội giữa các dân tộc.
                    {'\n'}
                    Lý do:
                    {'\n\n'}
                    - Phần lớn dân tộc thiểu số cư trú ở vùng sâu, vùng xa, biên giới với địa hình khó khăn, hạ tầng yếu.
                    {'\n'}
                    - Khoảng cách về trình độ dân trí, kỹ năng và tiếp cận cơ hội vẫn còn lớn.
                    {'\n'}
                    - Trong bối cảnh cách mạng công nghiệp 4.0, nếu không có chính sách đặc thù mạnh mẽ, khoảng cách này
                    có nguy cơ bị kéo rộng thêm.
                    {'\n\n'}
                    Kết luận: Chính sách dân tộc của Đảng đang chuyển hướng mạnh mẽ từ “đảm bảo ổn định” sang “ưu tiên phát
                    triển bền vững và thu hẹp khoảng cách” ở vùng đồng bào dân tộc thiểu số. Quan điểm của A phản ánh
                    thành tựu của giai đoạn trước, còn quan điểm của B phản ánh yêu cầu cấp thiết của giai đoạn hiện nay
                    và tương lai.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

