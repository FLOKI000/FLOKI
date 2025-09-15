<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Social Buttons</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .button-container {
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .button-container:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div class="flex flex-col space-y-6 p-4 max-w-md mx-auto">
    <!-- SITE Button with Text -->
    <div class="text-center">
      <p class="text-gray-600 text-lg font-semibold mb-2">سایت فلوکی 👇</p>
      <a href="https://floki000.github.io/FLOKI000/" target="_blank" class="button-container inline-block rounded-lg bg-blue-500 text-white font-medium py-3 px-6 text-center">
        <div class="flex items-center justify-center space-x-2">
          <img src="https://img.shields.io/badge/Telegram-FLOKI000-1A8FCA?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" class="h-6">
          <span>مشاهده سایت</span>
        </div>
      </a>
    </div>

    <!-- GitHub Button with Text -->
    <div class="text-center">
      <p class="text-gray-600 text-lg font-semibold mb-2">گیت هاب فلوکی 👇</p>
      <a href="https://github.com/FLOKI000/FLOKI000/tree/main/FLOKI333" target="_blank" class="button-container inline-block rounded-lg bg-gray-800 text-white font-medium py-3 px-6 text-center">
        <div class="flex items-center justify-center space-x-2">
          <img src="https://img.shields.io/badge/GitHub-FLOKI000-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" class="h-6">
          <span>مشاهده گیت هاب</span>
        </div>
      </a>
    </div>

    <!-- Telegram Button with Text -->
    <div class="text-center">
      <p class="text-gray-600 text-lg font-semibold mb-2">تلگرام فلوکی 👇</p>
      <a href="https://t.me/FLOKI000" target="_blank" class="button-container inline-block rounded-lg bg-blue-500 text-white font-medium py-3 px-6 text-center">
        <div class="flex items-center justify-center space-x-2">
          <img src="https://img.shields.io/badge/Telegram-FLOKI000-1A8FCA?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" class="h-6">
          <span>مشاهده تلگرام</span>
        </div>
      </a>
    </div>
  </div>

  <footer class="mt-12 text-center text-gray-600 text-sm">
    <p>© 2025 فلوکی. تمامی حقوق محفوظ است.</p>
  </footer>
</body>
</html>
