import { useState, useEffect } from 'react';

export default function useDarkMode() {
   const [isDark, setIsDark] = useState(() =>
      document.documentElement.classList.contains('dark')
   );

   useEffect(() => {
      const root = document.documentElement;
      const update = () => {
         setIsDark(root.classList.contains('dark'));
      };

      const observer = new MutationObserver(update);
      observer.observe(root, { attributes: true, attributeFilter: ['class'] });
      update(); 
      return () => observer.disconnect();
   }, [])
   return isDark;
}