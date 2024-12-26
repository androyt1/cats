import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCats } from "../api/catApi";
import CatCard from "@/components/catcard/CatCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Loader from "@/components/Loader";
import { useEffect, useRef, useCallback } from "react";

interface Cat {
  id: string;
  url: string;
  score?: number;
}

const HomePage = () => {
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: () => fetchCats(),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data && lastPage.data.length === 20
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleObserver]);

  const allCats = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="p-1 md:p-4">
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}

      {isError && (
        <Alert variant="destructive">
          <AlertDescription>
            {(error as Error).message || "Failed to load cats"}
          </AlertDescription>
        </Alert>
      )}

      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 bg-stone-100 dark:bg-stone-700 p-1 md:p-4">
            {allCats.map((cat: Cat) => (
              <CatCard
                key={cat.id}
                id={cat.id}
                url={cat.url}
                score={cat.score || 0}
              />
            ))}
          </div>

          <div ref={observerTarget} className="h-4 w-full mt-4" />

          {isFetchingNextPage && (
            <div className="flex justify-center items-center mt-4">
              <Loader />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
