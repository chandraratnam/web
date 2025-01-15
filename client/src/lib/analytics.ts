export function initializeAnalytics() {
  // Replace with actual Google Analytics ID
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}

export function trackPageView(path: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
}
