<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>صفحه شخصی فلوکی</title>
  <style>
    body {
      font-family: 'Vazirmatn', sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      text-align: center;
      direction: rtl;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .dark-mode {
      background-color: #2c3e50;
      color: #ecf0f1;
    }

    .profile-img {
      border-radius: 50%;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;
      width: 150px;
    }

    .profile-img:hover {
      transform: scale(1.15);
    }

    .button {
      background-color: #2c3e50;
      color: white;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #34495e;
    }

    .copy-alert {
      color: limegreen;
      margin-top: 10px;
      display: none;
    }

    .skill-card {
      display: inline-block;
      background: white;
      margin: 10px;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .skill-card:hover {
      transform: scale(1.05);
    }

    .toggle-button {
      margin: 20px;
      font-size: 14px;
      padding: 8px 14px;
      background-color: #7f8c8d;
    }
  </style>
</head>

<body>

  <button class="toggle-button button" onclick="toggleDarkMode()">🌓 تغییر تم</button>

  <img src="https://your-image-url.com/floki-profile-pic.png" alt="Profile Picture" class="profile-img">

  <h1 id="typewriter"></h1>

  <p style="color: #7f8c8d;">یک توسعه‌دهنده عاشق تکنولوژی 🚀</p>

  <h2>✨ درباره من</h2>
  <p style="max-width: 600px; margin: 0 auto;">من فلوکی هستم؛ روی پروژه‌های خلاقانه کار می‌کنم و هدفم خلق تجربه‌های عالی برای کاربران است. عاشق نوآوری و یادگیری تکنولوژی‌های جدیدم!</p>

  <h2>💼 مهارت‌های من</h2>
  <div>
    <div class="skill-card">💻 جاوا اسکریپت</div>
    <div class="skill-card">⚛️ ری‌اکت</div>
    <div class="skill-card">🌐 HTML & CSS</div>
    <div class="skill-card">🛠️ نود جی‌اس</div>
  </div>

  <h2>📬 ارتباط با من</h2>
  <a href="https://t.me/your-telegram" target="_blank">
    <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" style="margin: 20px 0;">
  </a>

  <div style="margin: 30px;">
    <button class="button" onclick="copyText()">📋 کلیک کن و متن رو کپی کن</button>
    <p id="copyAlert" class="copy-alert">✅ متن با موفقیت کپی شد!</p>
  </div>

  <blockquote style="margin: 30px auto; font-style: italic; color: #7f8c8d; max-width: 500px;">«هر روز چیز جدیدی یاد بگیر، فردای تو به تلاش امروزت بستگی داره.» 🚀</blockquote>

  <footer style="margin: 40px auto; color: #7f8c8d;">🔥 ساخته شده توسط فلوکی 🔥</footer>

  <script>
    function copyText() {
      const text = "عرفان اینو میخواهم کپی کنن";
      navigator.clipboard.writeText(text).then(() => {
        document.getElementById('copyAlert').style.display = 'block';
        setTimeout(() => {
          document.getElementById('copyAlert').style.display = 'none';
        }, 2000);
      });
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    function typeWriterEffect(elementId, text, speed) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          document.getElementById(elementId).innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        }
      }
      typing();
    }

    typeWriterEffect("typewriter", "👋 سلام! من فلوکی هستم", 100);
  </script>

</body>
</html>