import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface FetchInterface {
  _id: string;
  id: string;
  author: string;
  child_id: string;
  ping_group: string;
  body: { md: string; html: string };
  distinguished: string | null;
  edited: boolean;
  permalink: string;
  time: number;
  parent_submission: string;
}

interface OutputInterface {
  loading: boolean;
  err: boolean;
  pings: FetchInterface[];
  hasMore: boolean;
}

const useFetch = (
  location: string,
  query: string | null,
  pageNum: number
): OutputInterface => {
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);
  const [pings, setPings] = useState<FetchInterface[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  // Reset to empty array on location change
  useEffect(() => {
    setPings([]);
  }, [location, query]);

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    setErr(false);

    const controller = new AbortController();
    axios({
      signal: controller.signal,
      method: 'GET',
      url: `http://localhost:3001/api/pings/${location}/${pageNum}`,
      params: { q: query }
    })
      .then((res: AxiosResponse): void => {
        // concatenate pings list
        const newPings: FetchInterface[] = res.data;
        setPings((prevPings: FetchInterface[]) => [...prevPings, ...newPings]);
        setHasMore(res.data.length === 10);
        setLoading(false);
      })
      .catch((err: AxiosError): void => {
        if (err.name === 'CanceledError') {
          // ignore cancelled fetch calls
          return;
        }
        console.log(err);
        setErr(true);
      });

    // Abort fetch if we have new fetch call.
    return () => {
      controller.abort();
    };
  }, [location, pageNum, query]);

  return { loading, err, pings, hasMore };
};

export { useFetch, FetchInterface };
