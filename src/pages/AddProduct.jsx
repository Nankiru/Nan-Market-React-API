import React from "react";

const AddProduct = () => {
  return (
    <div>
      <section className=" p-1 xs:p-8">
        <div className=" max-w-96 sm:max-w-4xl mx-auto border border-[#0274d1] rounded-lg p-8">
          <h2 className="sm:text-xl text-[12px] font-bold mb-6 text-white">
            Title
          </h2>
          <form>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="text-xs text-white xs:text-sm font-medium mb-1 "
                >
                  Product name{/* */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    color="#9CA3AF"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-alert inline-block"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={8} y2={12} />
                    <line x1={12} x2="12.01" y1={16} y2={16} />
                  </svg>{" "}
                </label>
                <input
                  type="text"
                  id="title"
                  className="h-[50px] rounded-[5px]  text-white xs:text-sm border border-[#D1D5DB] w-full px-2"
                  name="title"
                  defaultValue=""
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="category"
                    className=" text-white xs:text-sm font-medium mb-1"
                  >
                    Price
                  </label>

                  <input
                    type="number"
                    step={0.01}
                    id="title"
                    className="h-[50px] rounded-[5px]  text-white xs:text-sm border border-[#D1D5DB] w-full px-2"
                    name="title"
                    defaultValue=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="subcategory"
                    className=" text-white xs:text-sm font-medium  mb-1"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="title"
                    step={1}
                    className="h-[50px] rounded-[5px]  text-white xs:text-sm border border-[#D1D5DB] w-full px-2"
                    name="title"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className=" text-white xs:text-sm font-medium  mb-1"
                  >
                    Status <span className="font-light">(Optional)</span>
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="h-[50px] rounded-[5px] text-gray-600 xs:text-sm border border-[#D1D5DB] w-full px-2"
                  >
                    <option value="" selected="" className="">
                      Select
                    </option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="language"
                    className=" text-white xs:text-sm font-medium  mb-1"
                  >
                    Description
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="text-xs text-white xs:text-sm font-medium mt-5"
              >
                Description{/* */}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  color="#9CA3AF"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert inline-block"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} x2={12} y1={8} y2={12} />
                  <line x1={12} x2="12.01" y1={16} y2={16} />
                </svg>{" "}
              </label>
              <textarea cols={90} rows={50}
                id="title"
                className="h-[50px] rounded-[5px]  text-white xs:text-sm border border-[#D1D5DB] w-full px-2"
                name="title"
                defaultValue=""
              />
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:text-white text-gray-200 px-4 cursor-pointer transition-all duration-300  font-inter py-2 rounded-xl"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
