import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ComponentProps,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type ViewerImage = { src: string };

type ImageViewerState = {
  isOpen: boolean;
  album: ViewerImage[];
  currentIndex: number;
};

declare global {
  var __viewer: ImageViewerStore | undefined;
}

type ImageViewerStore = {
  state: ImageViewerState;
  listeners: Set<() => void>;
};

const store: ImageViewerStore =
  globalThis.__viewer ??
  (globalThis.__viewer = {
    state: {
      isOpen: false,
      album: [],
      currentIndex: 0,
    },
    listeners: new Set(),
  });

function emit() {
  store.listeners.forEach((l) => l());
}

export const viewer = {
  /* ----- core store API ----- */
  getState: () => store.state,

  subscribe(listener: () => void) {
    store.listeners.add(listener);
    return () => store.listeners.delete(listener);
  },

  /* ----- actions ----- */
  open(index = 0) {
    store.state.currentIndex = index;
    store.state.isOpen = true;
    emit();
  },

  close() {
    store.state.isOpen = false;
    emit();
  },

  setAlbum(album: ViewerImage[]) {
    store.state.album = album;
    store.state.currentIndex = 0;
    emit();
  },
};

export function useImageViewer<T>(selector: (s: ImageViewerState) => T) {
  return useSyncExternalStore(
    viewer.subscribe,
    () => selector(viewer.getState()),
    () => selector(viewer.getState()),
  );
}

export function ImageViewer(_: ComponentProps<"div">) {
  const isOpen = useImageViewer((s) => s.isOpen);
  const album = useImageViewer((s) => s.album);
  const currentIndex = useImageViewer((s) => s.currentIndex);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "ArrowRight") {
        viewer.open(Math.min(album.length - 1, currentIndex + 1));
      } else if (e.key === "ArrowLeft") {
        viewer.open(Math.max(0, currentIndex - 1));
      } else if (e.key === "Escape") {
        viewer.close();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) viewer.close();
      }}
    >
      <DialogContent className="!h-svh !w-full !max-w-none rounded-none border-none bg-transparent text-white shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Image Viewer</DialogTitle>
        </DialogHeader>
        <div role="img" className="m-auto h-[90vh] w-[90vw]">
          <Image
            src={album[currentIndex]?.src}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <PreviousImage />
        <NextImage />
        <div className="fixed right-0 bottom-0 left-0 flex items-center justify-center bg-linear-to-t from-black to-transparent px-12 py-8">
          <Thumbnails />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PreviousImage() {
  const currentIndex = useImageViewer((s) => s.currentIndex);
  const isClickable = useMemo(() => currentIndex - 1 > 0, [currentIndex]);
  const onClickHandler = useCallback(() => {
    if (!isClickable) return;
    viewer.open(currentIndex - 1);
  }, [isClickable, currentIndex]);
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 z-10",
        "pointer-events-none flex items-center justify-center px-4 py-8",
        "bg-linear-to-r from-black/20 to-transparent",
        !isClickable ? "cursor-not-allowed opacity-50" : "hover:from-black/60",
      )}
    >
      <button
        role="menuitem"
        className="pointer-events-auto p-4"
        onClick={onClickHandler}
      >
        <ChevronLeft />
      </button>
    </div>
  );
}

function NextImage() {
  const album = useImageViewer((s) => s.album);
  const currentIndex = useImageViewer((s) => s.currentIndex);
  const isClickable = useMemo(
    () => currentIndex + 1 < album.length,
    [currentIndex, album],
  );
  const onClickHandler = useCallback(() => {
    if (!isClickable) return;
    viewer.open(currentIndex + 1);
  }, [isClickable, currentIndex]);
  return (
    <div
      className={cn(
        "fixed top-0 right-0 bottom-0 z-10",
        "pointer-events-none flex items-center justify-center px-4 py-8",
        "bg-linear-to-l from-black/20 to-transparent hover:from-black/60",
        !isClickable ? "cursor-not-allowed opacity-50" : "hover:from-black/60",
      )}
    >
      <button
        role="menuitem"
        className="pointer-events-auto p-4"
        onClick={onClickHandler}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function Thumbnails({ max }: { max?: number }) {
  const isMobile = useIsMobile();
  const maxValue = useMemo(() => ((max ?? isMobile) ? 4 : 8), [isMobile, max]);
  const album = useImageViewer((s) => s.album);
  const currentIndex = useImageViewer((s) => s.currentIndex);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(maxValue);

  useEffect(() => {
    if (currentIndex < startIndex) {
      setStartIndex(currentIndex);
      setEndIndex(currentIndex + maxValue);
    } else if (currentIndex >= endIndex) {
      setEndIndex(currentIndex + 1);
      setStartIndex(currentIndex + 1 - maxValue);
    }
  }, [currentIndex, album.length, maxValue]);

  const isNextButtonDisabled = useMemo(() => {
    return endIndex >= album.length;
  }, [endIndex, album.length]);

  const isPreviousButtonDisabled = useMemo(() => {
    return startIndex <= 0;
  }, [startIndex]);

  const thumbnails = useMemo(() => {
    return album.slice(startIndex, endIndex);
  }, [album, startIndex, endIndex]);

  return (
    <div role="menubar" className="flex gap-2 py-2">
      <button
        role="menuitem"
        className={cn(
          "flex size-8 cursor-pointer items-center justify-center sm:size-16",
          isPreviousButtonDisabled && "cursor-not-allowed opacity-50",
        )}
        onClick={() => {
          if (!isPreviousButtonDisabled) {
            setStartIndex((s) => Math.max(0, s - 1));
            setEndIndex((e) => Math.max(maxValue, e - 1));
          }
        }}
        disabled={isPreviousButtonDisabled}
      >
        <ChevronLeft />
      </button>
      {thumbnails.map((image, index) => (
        <button
          key={`${startIndex + index}`}
          role="menuitem"
          className={cn(
            "size-8 cursor-pointer overflow-hidden rounded-lg sm:size-16",
            startIndex + index === currentIndex && "ring-secondary ring-2",
          )}
          onClick={() => viewer.open(startIndex + index)}
        >
          <Image src={image.src} className="h-full w-full object-cover" />
        </button>
      ))}
      <button
        role="menuitem"
        className={cn(
          "flex size-8 cursor-pointer items-center justify-center sm:size-16",
          isNextButtonDisabled && "cursor-not-allowed opacity-50",
        )}
        onClick={() => {
          if (!isNextButtonDisabled) {
            setStartIndex((s) => s + 1);
            setEndIndex((e) => Math.min(album.length, e + 1));
          }
        }}
        disabled={isNextButtonDisabled}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
