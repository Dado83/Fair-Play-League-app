import { useEffect } from 'react';

export default function useVisitorCount(protocol, site, url) {
  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=${url}`);
  }, []);
}
