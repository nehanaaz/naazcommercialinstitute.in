import {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ComponentProps,
} from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Image } from "@/components/ui/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

type ViewerImage = { src: string }

type ImageViewerState = {
  isOpen: boolean
  album: ViewerImage[]
  currentIndex: number
}

declare global {
  var __viewer: ImageViewerStore | undefined
}

type ImageViewerStore = {
  state: ImageViewerState
  listeners: Set<() => void>
}

const store: ImageViewerStore =
  globalThis.__viewer ??
  (globalThis.__viewer = {
    state: {
      isOpen: false,
      album: [],
      currentIndex: 0,
    },
    listeners: new Set(),
  })

function emit() {
  store.listeners.forEach(l => l())
}

export const viewer = {
  /* ----- core store API ----- */
  getState: () => store.state,

  subscribe(listener: () => void) {
    store.listeners.add(listener)
    return () => store.listeners.delete(listener)
  },

  /* ----- actions ----- */
  open(index = 0) {
    store.state.currentIndex = index;
    store.state.isOpen = true;
    emit()
  },

  close() {
    store.state.isOpen = false;
    emit()
  },

  setAlbum(album: ViewerImage[]) {
    store.state.album = album;
    store.state.currentIndex = 0;
    emit()
  },
}

export function useImageViewer<T>(
  selector: (s: ImageViewerState) => T
) {
  return useSyncExternalStore(
    viewer.subscribe,
    () => selector(viewer.getState()),
    () => selector(viewer.getState())
  )
}

export function ImageViewer(_: ComponentProps<"div">) {
  const isOpen = useImageViewer(s => s.isOpen)
  const album = useImageViewer(s => s.album)
  const currentIndex = useImageViewer(s => s.currentIndex)

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
  }, [currentIndex, isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) viewer.close() }}>
      <DialogContent className="bg-transparent rounded-none border-none shadow-none !w-full !max-w-none !h-svh">
        <DialogHeader className="sr-only">
          <DialogTitle>Image Viewer</DialogTitle>
        </DialogHeader>
        <div className="w-[90vw] h-[90vh] m-auto">
          <Image src={album[currentIndex]?.src} className="w-full h-full object-contain" />
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent py-8 px-12 flex justify-center items-center">
          <Thumbnails />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function Thumbnails({ max }: { max?: number }) {
  const isMobile = useIsMobile();
  const maxValue = useMemo(() => max ?? isMobile ? 4 : 8, [isMobile, max]);
  const album = useImageViewer(s => s.album)
  const currentIndex = useImageViewer(s => s.currentIndex)
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
  }, [album, startIndex, endIndex])

  return (
    <div className="flex gap-2 py-2 text-white">
      <button
        className={cn('size-8 sm:size-16 cursor-pointer flex items-center justify-center', isPreviousButtonDisabled && 'opacity-50 cursor-not-allowed')}
        onClick={() => {
          if (!isPreviousButtonDisabled) {
            setStartIndex(s => Math.max(0, s - 1));
            setEndIndex(e => Math.max(maxValue, e - 1));
          }
        }}
        disabled={isPreviousButtonDisabled}
      >
        <ChevronLeft />
      </button>
      {thumbnails.map((image, index) => (
        <button
          key={`${startIndex + index}`}
          className={cn('size-8 sm:size-16 cursor-pointer rounded-lg overflow-hidden', startIndex + index === currentIndex && 'ring-2 ring-secondary')}
          onClick={() => viewer.open(startIndex + index)}
        >
          <Image
            src={image.src}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
      <button
        className={cn('size-8 sm:size-16 cursor-pointer flex items-center justify-center', isNextButtonDisabled && 'opacity-50 cursor-not-allowed')}
        onClick={() => {
          if (!isNextButtonDisabled) {
            setStartIndex(s => s + 1);
            setEndIndex(e => Math.min(album.length, e + 1));
          }
        }}
        disabled={isNextButtonDisabled}
      >
        <ChevronRight />
      </button>
    </div>
  )
}