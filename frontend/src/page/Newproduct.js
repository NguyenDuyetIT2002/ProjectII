import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const Newproduct = () => {
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 ">
        <label htmlFor="name">Tên</label>
        <input
          type={"text"}
          name="name"
          className="outline-none focus-within:outline-blue-500 hover:outline-blue-500 bg-slate-300"
        ></input>

        <label htmlFor="type" className="mt-3">
          Loại
        </label>
        <select
          className="mt-5 mb-5 bg-slate-300 outline-none focus-within:outline-blue-500 hover:outline-blue-500"
          name="type"
        >
          <option>Quần dài</option>
          <option>Quần đùi</option>
          <option>Áo sơ mi</option>
          <option>Áo khoác</option>
          <option>Mũ</option>
          <option>Giày</option>
        </select>

        <label htmlFor="image">Ảnh</label>
        <div
          id="image"
          className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center"
        >
          <span className="text-5xl">
            <BsCloudUpload />
          </span>
        </div>

        <label htmlFor="price">Giá</label>
        <input
          type={"text"}
          className="mt-5 mb-5 bg-slate-300 outline-none focus-within:outline-blue-500 hover:outline-blue-500"
        ></input>

        <label htmlFor="description">Mô tả</label>
        <textarea
          rows={2}
          className="mt-5 mb-5 bg-slate-300 outline-none focus-within:outline-blue-500 hover:outline-blue-500"
        ></textarea>

        <button
          type="submit"
          className="max-w-[150px] m-auto w-full bg-slate-200 rounded-lg hover:bg-red-500 cursor-pointer text-xl py-1 mt-4"
        >
          Lưu
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
