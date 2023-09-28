import ky from 'ky-universal';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const parsed: any = await ky(`https://wexcuteblog.herokuapp.com/ghost/api/content/posts/?key=7871e4f302b37384d9e5301dce`).json();

  console.log('parsed', parsed);
  return parsed;
};

const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });
};

export { usePosts, fetchPosts };
