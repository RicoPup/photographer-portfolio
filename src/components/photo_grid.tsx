import Image from "next/image";

export default function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-14">
      {photos.prisma.map((photo) => (
        <div key={photo.id}>
          <div className="relative h-0" style={{ paddingBottom: "100%" }}>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={photo.imageUrl}
              alt="Camera Closeup"
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
}