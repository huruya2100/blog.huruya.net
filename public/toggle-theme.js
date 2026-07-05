(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  const setTheme = theme => {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    button?.setAttribute('aria-label', theme === 'dark' ? 'ライトテーマに切り替え' : 'ダークテーマに切り替え');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#212737' : '#fdfdfd');
    }
  };

  const currentTheme = root.dataset.theme || 'light';
  setTheme(currentTheme);

  button?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
})();
