import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  loomEmbedUrl: string;
}

const VideoModal = ({
  isOpen,
  onOpenChange,
  title,
  loomEmbedUrl,
}: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl rounded-3xl border-none bg-black/95 p-0 overflow-hidden shadow-[0_0_50px_-12px_rgba(155,93,229,0.3)] backdrop-blur-xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-left font-display text-xl font-bold text-white/90">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full p-2 pb-6 px-6">
          <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe
              src={`${loomEmbedUrl}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_params=true&autoplay=true`}
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              allow="autoplay"
              className="h-full w-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
