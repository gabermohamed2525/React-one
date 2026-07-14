import { Skeleton } from "@mui/material";

export default function SkeltonProdcuts() {
  const array = Array.from({ length: 8 });

  return (
    <>
      {array.map((_, index) => (
        <div key={index} className="flex justify-center py-8">
          <div className="card w-87.5 rounded-xl overflow-hidden p-6">

            {/* Image */}
            <div className="relative h-90 flex items-center justify-center">

              <Skeleton
                variant="rounded"
                animation="wave"
                width={230}
                height={230}
                sx={{
                  bgcolor: "rgba(255,255,255,.08)",
                  borderRadius: "12px",
                }}
              />

              {/* Time */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <Skeleton
                  variant="circular"
                  animation="wave"
                  width={16}
                  height={16}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />

                <Skeleton
                  variant="text"
                  animation="wave"
                  width={80}
                  height={20}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />
              </div>

              {/* Share */}
              <div className="absolute top-5 right-5">
                <Skeleton
                  variant="circular"
                  animation="wave"
                  width={44}
                  height={44}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />
              </div>

              {/* Favorite */}
              <div className="absolute bottom-5 right-5">
                <Skeleton
                  variant="circular"
                  animation="wave"
                  width={44}
                  height={44}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />
              </div>

            </div>

            {/* Content */}
            <div className="mt-5">

              <Skeleton
                variant="text"
                animation="wave"
                width={90}
                height={18}
                sx={{ bgcolor: "rgba(255,255,255,.08)" }}
              />

              <div className="flex justify-between items-center mt-3">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={170}
                  height={40}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />

                <Skeleton
                  variant="text"
                  animation="wave"
                  width={60}
                  height={40}
                  sx={{ bgcolor: "rgba(255,255,255,.08)" }}
                />
              </div>

              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height={1}
                sx={{
                  bgcolor: "rgba(255,255,255,.08)",
                  my: 3,
                }}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                width="100%"
                height={56}
                sx={{
                  bgcolor: "rgba(255,255,255,.08)",
                  borderRadius: "10px",
                }}
              />

            </div>
          </div>
        </div>
      ))}
    </>
  );
}