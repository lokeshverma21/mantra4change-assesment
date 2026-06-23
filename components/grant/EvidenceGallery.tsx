import { ImageIcon } from "lucide-react";

type EvidenceGalleryProps = {
  images: string[];
};

export default function EvidenceGallery({
  images,
}: EvidenceGalleryProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <ImageIcon className="h-4 w-4" />
        </span>

        <h3 className="text-sm font-semibold text-slate-900">
          Evidence Gallery
        </h3>
      </div>

      {images.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <p className="text-sm text-slate-400">
            No evidence available.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src={image}
                alt={`Evidence ${index + 1}`}
                className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}