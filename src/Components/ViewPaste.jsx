import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log(paste);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-6">
        <input
          className="w-[70%] bg-[#1b2533] text-white px-4 py-2 rounded-md shadow-md"
          type="text"
          placeholder="Enter Title Here"
          disabled
          value={paste.title}
          //   onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-[70%] bg-[#1b2533] text-white px-4 py-3 rounded-md shadow-md resize-none"
          name="textarea"
          id="textarea"
          disabled
          value={paste.content}
          placeholder="Enter Content Here"
          //   onChange={(e) => setValue(e.target.value)}
          rows={15}
        ></textarea>
      </div>
      
    </div>
  );
};

export default ViewPaste;
