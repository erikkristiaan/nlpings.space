import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(pingId, pageNum) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [pings, setPings] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // Reset to empty array on location change
  useEffect(() => {
    setPings([]);
  }, [pingId]);

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    setErr(false);

    const controller = new AbortController();

    setTimeout(() => {
    axios({
      signal: controller.signal,
      method: 'GET',
      url: `http://localhost:3001/api/pings/${pingId}/${pageNum}`
    })
      // .then((res) => res.json())
      .then((res) => {
        // concatenate pings list
        setPings((prevPings) => [...prevPings, ...res.data]);
        setHasMore(res.data.length === 10);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'CanceledError') {
          // ignore cancelled fetch calls
          return;
        }
        console.log(err);
        setErr(true);
      });
    }, 250);

    return () => {
      controller.abort();
    }
  }, [pingId, pageNum]);

  return { loading, err, pings, hasMore };
}
