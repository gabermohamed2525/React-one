import { FaEnvelope, FaPhoneAlt, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";

import Container from "../Components/re-usable Com/Container";
import Headung from "../Components/re-usable Com/Headung";
import useAuth from "../zustand/authSlice";
import useOrder from "../zustand/orderSlice";
import useWishlist from "../zustand/wishListClice";

export default function UserProfile() {
  const updateBio = useAuth(s => s.updateBio);

  const cuurentUser = useAuth((s) => s.cuurentUser);
  const [bio, setBio] = useState(cuurentUser?.bio || "");
  const uploadProfileImage = useAuth((s) => s.uploadProfileImage);
  const signOut = useAuth((s) => s.signOut);
  const isPendingSignout = useAuth((s) => s.isPendingSignout);
  const orders = useOrder((s) => s.orders);
  const wishlist = useWishlist((s) => s.wishlistData);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const res = await uploadProfileImage(file);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success("Profile image updated successfully");
  };

  return (
    <Container>
      <Headung title="Your Profile" user />

      <div className="mt-10 mb-20 relative">

        {/* Cover */}
        <div className="relative h-70 w-120 mx-auto rounded-4xl  overflow-hidden shadow-2xl">

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-5 left-30 ">

            <input
              type="file"
              id="profileImage"
              hidden
              accept="image/*"
              onChange={handleUpload}
            />

            <label htmlFor="profileImage" className="cursor-pointer group">
            
              <img
                src={cuurentUser?.image || "/images/default-user.png"}
                alt=""
                className="w-60 h-60 rounded-full object-cover border-[5px] border-orange-500 shadow-2xl duration-300 group-hover:brightness-75"
              />

              <div className="absolute bottom-2 right-2 bg-orange-500 rounded-full p-2">
                <FaUserEdit className="text-white text-sm" />
              </div>

            </label>

          </div>

        </div>
                  <input
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself..."
                      className="absolute top-56 left-120 w-85 h-32 rounded-2xl p-5 text-white resize-none outline-non outline-none"
                  />
                  <button onClick={async () => {
                      const res = await updateBio(bio);

                      if (!res.success) {
                        toast.error(res.message);
                         return;
                                }

                             toast.success("Bio updated");
                              }}
                                    className="absolute top-78.5 left-133 bg-orange-500 hover:bg-orange-600 px-5  py-3 rounded-xl font-bold"
                                                            >
                                                               Save Bio
                                                                            </button>
        {/* User Info */}
        <div className="pt-24 px-8">

          <div className="flex  lg:flex-row justify-between items-center gap-6">

            <div>

              <div className="flex items-center gap-3">

                <h2 className="text-4xl font-bold text-white capitalize">
                  {cuurentUser?.userName}
                </h2>

                <MdVerified className="text-orange-500 text-3xl" />

              </div>

              <p className="text-gray-400 mt-2">
                Member Since{" "}
                {new Date(
                  cuurentUser?.created_at || ""
                ).toLocaleDateString()}
              </p>

            </div>

            <button
              onClick={signOut}
              disabled={isPendingSignout}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 duration-300 px-6 py-3 rounded-xl text-white font-bold"
            >
              <FaSignOutAlt />
              {isPendingSignout ? "Signing Out..." : "Logout"}
            </button>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <div className="rounded-2xl flex items-center justify-center gap-4 flex-col bg-[#1a1a1a] border border-orange-500/30 p-8 hover:border-orange-500 duration-300">
              <h3 className="text-orange-500 text-5xl font-bold">{orders.length}</h3>
              <p className="text-gray-400 mt-2">Orders</p>
            </div>

            <div className="rounded-2xl flex items-center justify-center gap-4 flex-col bg-[#1a1a1a] border border-orange-500/30 p-8 hover:border-orange-500 duration-300">
              <h3 className="text-orange-500 text-5xl font-bold">{wishlist.length}</h3>
              <p className="text-gray-400 mt-2">Wishlist</p>
            </div>

            

          </div>

          {/* Personal Information */}
          <div className="mt-12 rounded-3xl bg-[#1a1a1a] border border-orange-500/20 p-8">

            <h2 className="text-3xl font-bold text-orange-500 mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-center gap-4 bg-[#262626] rounded-xl p-5">

                <FaEnvelope className="text-orange-500 text-2xl" />

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <h3 className="text-white font-semibold">
                    {cuurentUser?.email}
                  </h3>
                </div>

              </div>

              <div className="flex items-center gap-4 bg-[#262626] rounded-xl p-5">

                <FaPhoneAlt className="text-orange-500 text-2xl" />

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <h3 className="text-white font-semibold">
                    {cuurentUser?.phone}
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </Container>
  );
}