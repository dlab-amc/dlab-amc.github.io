const fs = require('fs');
const path = require('path');

// 경로 설정
const jsonPath = path.join(__dirname, 'data', 'members', 'member.json');
const outputDir = path.join(__dirname, 'htmls', 'members');

// 템플릿 함수
const generateHTML = (member) => {
  const nameOnly = member.name_eng.split(',')[0].trim();
  const profileImage = member.profile_image || '';
  const hoverImage = member.hover_image || '';
  const degree = member.degree || '';
  const description = member.profile_description || '';
  const contents = member.contents || '';

  return `---
layout: default
---

<!-- Main -->
<article id="main">
  <header class="special container">
    <h2>members</h2>
  </header>

  <section class="wrapper style4 container">
    <div class="row oneandhalf">
      <div class="4u">
        <div class="sidebar">
          <section>
            <header>
              <div class="egg_img">
                <img src="${profileImage}" alt="" class="egg_0">
                <img src="${hoverImage}" alt="" class="egg_1">
              </div>
              <p><strong><span style="font-size: 2rem;"> ${member.name_eng},</strong></span> ${degree}</p>
            </header>
            <p>${description}</p>
          </section>
        </div>
      </div>

      <div class="8u skel-cell-important">
        <div class="content">
          <section>
            ${contents}
          </section>
        </div>
      </div>
    </div>
  </section>
</article>
`;
};

// JSON 읽기 및 파일 생성
fs.readFile(jsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('JSON 파일 읽기 실패:', err);
    return;
  }

  const members = JSON.parse(data);

  // 출력 폴더 없으면 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  members.forEach((member) => {
    const nameSlug = member.name_eng.split(',')[0].trim(); // 공백 그대로 유지
    const htmlContent = generateHTML(member);
    const outputPath = path.join(outputDir, `${nameSlug}.md`);

    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    console.log(`✔ 생성됨: ${outputPath}`);
  });
});
