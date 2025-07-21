<div align="center" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 30px; border-radius: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">

  <img src="https://your-image-url.com/floki-profile-pic.png"
       alt="Profile Picture"
       width="150"
       style="border-radius: 50%; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease-in-out;"
       onmouseover="this.style.transform='scale(1.15)'"
       onmouseout="this.style.transform='scale(1)'">

  <h1 style="color: #2c3e50; font-size: 2em; margin-top: 20px;">👋 سلام! من فلوکی هستم</h1>
  <p style="font-size: 1.1em; color: #7f8c8d; max-width: 600px;">یک توسعه‌دهنده عاشق تکنولوژی، که برای ساخت ابزارهای جذاب و مفید تلاش می‌کنم 🚀</p>

  <h2 style="color: #34495e; margin-top: 40px;">✨ درباره من</h2>
  <p style="max-width: 600px; color: #2c3e50; line-height: 1.7;">من فلوکی هستم؛ روی پروژه‌های خلاقانه کار می‌کنم و هدفم خلق تجربه‌های عالی برای کاربران است. عاشق نوآوری و یادگیری تکنولوژی‌های جدیدم!</p>

  <h2 style="color: #34495e; margin-top: 40px;">📬 ارتباط با من</h2>
  <p style="color: #2c3e50;">اگه دوست داشتی همکاری کنیم یا سؤالی داشتی، می‌تونی از طریق تلگرام باهام در ارتباط باشی 👇</p>

  <div style="margin: 20px 0;">
    <a href="https://t.me/your-telegram" target="_blank">
      <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"
           alt="Telegram"
           style="transition: transform 0.3s ease-in-out;"
           onmouseover="this.style.transform='scale(1.1)'"
           onmouseout="this.style.transform='scale(1)'">
    </a>
  </div>

  <!-- Copy Text Button -->
  <div style="margin: 30px 0;">
    <button onclick="copyText()" style="background-color: #2c3e50; color: white; border: none; padding: 15px 25px; font-size: 1em; border-radius: 10px; cursor: pointer; transition: background-color 0.3s ease;">
      📋 کلیک کن و متن رو کپی کن
    </button>
    <p id="copyAlert" style="display:none; color: green; margin-top: 10px;">✅ متن با موفقیت کپی شد!</p>
  </div>

  <footer style="margin-top: 50px; color: #7f8c8d;">
    <p>🔥 ساخته شده توسط فلوکی 🔥</p>
  </footer>

</div>

<script>
  function copyText() {
    const text = "عرفان اینو میخواهم کپی کنن";
    navigator.clipboard.writeText(text).then(function() {
      document.getElementById('copyAlert').style.display = 'block';
      setTimeout(() => {
        document.getElementById('copyAlert').style.display = 'none';
      }, 2000);
    });
  }
</script>