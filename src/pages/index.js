import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the tutorials page
    history.push('/formsflow-documentation/linux');
  }, [history]);

  return null; // Nothing to render since we're redirecting
}
