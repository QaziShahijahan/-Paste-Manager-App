import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div className="flex  flex-col">
      <input
        type="search"
        className="w-[90%] max-w-4xl mx-auto my-6 px-4 py-3 rounded-xl bg-[#1c2532] text-white placeholder:text-gray-400 border border-[#2e3a4d] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Search Title Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="w-[90%] max-w-4xl mx-auto bg-[#0f172a] p-6 rounded-2xl shadow-lg space-y-6">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="bg-[#111827] border border-gray-700 rounded-xl p-4 space-y-4"
                key={paste?._id}
              >
                <div className="text-4xl font-bold text-white break-words">
                  {paste.title}
                </div>
                <div className="text-md text-gray-400 break-words">
                  {paste.content}
                </div>
                <div className="flex flex-wrap gap-3 ">
                  <button className="bg-[#1f2937] hover:bg-cyan-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition duration-200">
                    <a href={`/?pasteId=${paste?._id}`}> ✏️ Edit</a>
                  </button>
                  <button className="bg-[#1f2937] hover:bg-cyan-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition duration-200">
                    <a href={`pastes/${paste?._id}`}>👁️ View</a>
                  </button>
                  <button
                    className="bg-[#1f2937] hover:bg-cyan-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition duration-200"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    🗑️ Delete
                  </button>
                  <button
                    className="bg-[#1f2937] hover:bg-cyan-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition duration-200"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to Clipboard");
                    }}
                  >
                    📋 Copy
                  </button>
                  <button className="bg-[#1f2937] hover:bg-cyan-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition duration-200">
                    🔗 Share
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                📅 {new Date(paste.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
