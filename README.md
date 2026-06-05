# Space Ark: Survival

Interactive browser-based sci-fi wellness experience that blends hydration reminders, workout motivation, and an engaging story.

## Что уже сделано

- [1mSEO[0m: мета-теги, Open Graph, Twitter Card, schema.org
- [1mGitHub Pages[0m: `index.html`, `robots.txt`, `sitemap.xml`
- [1mPWA[0m: `manifest.webmanifest`, `icon.svg`
- [1mДоступность[0m: `skip-link`, `aria-*`, фокусные стили
- [1mМобильность[0m: адаптивная верстка, numeric input

## Важные файлы

- `index.html` — главная страница для GitHub Pages
- `style-new.css` — стили
- `script-new.js` — логика игры
- `sw.js` — сервис-воркер для офлайн-режима
- `og-image.svg` — соцкартинка
- `icon.svg` — иконка PWA
- `manifest.webmanifest` — web app manifest
- `robots.txt` — инструкции для поисковых роботов
- `sitemap.xml` — карта сайта

## Как опубликовать на GitHub Pages

1. Создайте репозиторий `space-ark` на GitHub.
2. Скопируйте URL репозитория.
3. Выполните команды в PowerShell:

```powershell
cd C:\Users\julia\Documents\space-ark-new
git init
git add .
git commit -m "Initial Space Ark website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/space-ark.git
git push -u origin main
```

4. На GitHub активируйте Pages в настройках репозитория:
   - ветка `main`
   - папка `/ (root)`

5. Подождите несколько минут, затем откройте:
   - `https://YOUR_USERNAME.github.io/space-ark/`

## Как проверить сайт

- Откройте `index.html` в браузере
- Проверьте в Lighthouse
- Убедитесь, что `robots.txt` и `sitemap.xml` доступны

## Что можно сделать дальше

- Добавить `README.md` в репозиторий (уже создано)
- Написать краткое описание проекта на GitHub
- Проверить доступность через Lighthouse или WebHint
- Если будет реальный домен, заменить `https://yannnapol-a11y.github.io/space-ark/` в `robots.txt` и `sitemap.xml` на адрес сайта

## Советы

- `index.html` — единственная основная страница для GitHub Pages.
- Если хотите, я могу помочь шаг за шагом сделать коммит и опубликовать сайт.
