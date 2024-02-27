import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

export const SocialMedia: React.FC = () => {
  return (
    <div className="grid grid-cols-3 space-x-4 mt-4">
      <div className="border bg-[#2e477e] rounded-lg">
        <div className="py-7 flex justify-center">
          <Facebook className="w-10 h-10 fill-white" />
        </div>
        <div className="grid grid-cols-2 text-center bg-primary-foreground p-3">
          <div className="border-r border-r-primary/20">
            <p><strong>89k</strong></p>
            <p className="uppercase text-xs text-gray-500">Friends</p>
          </div>
          <div>
            <p><strong>459k</strong></p>
            <p className="uppercase text-xs text-gray-500">Feeds</p>
          </div>
        </div>
      </div>

      <div className="border bg-[#00ACED] rounded-lg">
        <div className="py-7 flex justify-center">
          <Twitter className="w-10 h-10 fill-white" />
        </div>
        <div className="grid grid-cols-2 text-center bg-primary-foreground p-3">
          <div className="border-r border-r-primary/20">
            <p><strong>973k</strong></p>
            <p className="uppercase text-xs text-gray-500">Followers</p>
          </div>
          <div>
            <p><strong>1.792</strong></p>
            <p className="uppercase text-xs text-gray-500">Tweets</p>
          </div>
        </div>
      </div>

      <div className="border bg-[#4875B4] rounded-lg">
        <div className="py-7 flex justify-center">
          <Linkedin className="w-10 h-10 fill-white" />
        </div>
        <div className="grid grid-cols-2 text-center bg-primary-foreground p-3">
          <div className="border-r border-r-primary/20">
            <p><strong>500+</strong></p>
            <p className="uppercase text-xs text-gray-500">Contacts</p>
          </div>
          <div>
            <p><strong>292</strong></p>
            <p className="uppercase text-xs text-gray-500">Feeds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
