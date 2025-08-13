import { getProducts } from "../api/product";
import Logo from "../assets/react.svg";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/css/font.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     await getProducts();
  //   };
  //   fetchProduct();
  // }, []);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products); // API returns { products: [...] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleting product id : ${id}`);
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl flex items-center justify-center border border-white/20">
            <span className="block w-16 h-16 border-4 border-t-transparent border-b-transparent border-r-indigo-400 border-l-pink-400 border-solid rounded-full animate-spin"></span>
            <span
              className="absolute text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-fuchsia-500 bg-clip-text font-extrabold text-xl animate-pulse drop-shadow-lg select-none"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Loading
            </span>
          </div>
        </div>
        {/* <p className="mt-6 text-lg text-gray-700 font-medium animate-fade-in">Fetching products, please wait...</p> */}
      </div>
    );


  if (error)
    return (
      <div class="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex lg:pt-[180px] pt-12 lg:pb-28 pb-12">
        <div class=" h-[550px] rounded-lg w-full">
          <div class="p-8 flex justify-between items-center border-b border-indigo-100">
          </div>
          <div class="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
            <svg
              width="314"
              height="171"
              viewBox="0 0 314 171"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M131.408 134.14L131.407 134.139C124.251 129.827 118.724 123.793 114.83 116.051L114.829 116.049C110.981 108.307 109.065 99.3201 109.065 89.1025C109.065 78.885 110.981 69.8983 114.829 62.156L114.83 62.1539C118.724 54.4117 124.251 48.3783 131.407 44.0663L131.408 44.0655C138.616 39.75 147.163 37.6025 157.029 37.6025C166.894 37.6025 175.419 39.7498 182.582 44.0659C189.784 48.3778 195.311 54.4115 199.16 62.1549C203.054 69.8975 204.993 78.8846 204.993 89.1025C204.993 99.3208 203.054 108.308 199.16 116.051C199.16 116.051 199.159 116.051 199.159 116.051L198.713 115.827C194.905 123.488 189.442 129.449 182.325 133.711L131.408 134.14ZM131.408 134.14C138.616 138.455 147.163 140.603 157.029 140.603C166.894 140.603 175.419 138.455 182.582 134.139L131.408 134.14ZM43.4542 138.063V138.563H43.9542H62.7222H63.2222V138.063V123.331H71.4262H71.9262V122.831V105.559V105.059H71.4262H63.2222V81.0785V80.5785H62.7222H43.9542H43.4542V81.0785V105.059H23.3911L53.9264 40.3559L54.2631 39.6425H53.4742H32.2582H31.9413L31.8061 39.9291L0.934056 105.345L0.88623 105.446V105.559V122.831V123.331H1.38623H43.4542V138.063ZM181.318 106.729L181.317 106.732C179.31 111.726 176.288 115.563 172.254 118.267C168.232 120.963 163.171 122.284 157.036 122.195C150.898 122.105 145.83 120.695 141.803 117.995C137.767 115.29 134.722 111.495 132.671 106.591C130.661 101.678 129.649 95.853 129.649 89.1025C129.649 82.3519 130.661 76.4793 132.672 71.4739C134.724 66.4795 137.769 62.6418 141.803 59.9379C145.825 57.2419 150.887 55.9209 157.021 56.0105C163.16 56.1001 168.227 57.5104 172.254 60.2099C176.29 62.9151 179.312 66.709 181.318 71.6119L181.319 71.6154C183.374 76.5274 184.409 82.3523 184.409 89.1025C184.409 95.8524 183.374 101.724 181.318 106.729ZM284.642 138.063V138.563H285.142H303.91H304.41V138.063V123.331H312.614H313.114V122.831V105.559V105.059H312.614H304.41V81.0785V80.5785H303.91H285.142H284.642V81.0785V105.059H264.579L295.114 40.3559L295.451 39.6425H294.662H273.446H273.129L272.994 39.9291L242.122 105.345L242.074 105.446V105.559V122.831V123.331H242.574H284.642V138.063Z"
                fill="#EEF2FF"
                stroke="#4F46E5"
              />
              <path
                d="M176.88 0.632498L176.88 0.632384L176.869 0.630954C176.264 0.549581 175.654 0.5 175.04 0.5H109.399C102.772 0.5 97.4004 5.84455 97.4004 12.4473V142.715C97.4004 149.318 102.772 154.662 109.399 154.662H204.009C210.652 154.662 216.007 149.317 216.007 142.715V38.9309C216.007 38.0244 215.908 37.1334 215.709 36.2586L215.709 36.2584C215.178 33.9309 213.935 31.7686 212.127 30.1333C212.127 30.1331 212.126 30.1329 212.126 30.1327L183.129 3.65203C183.129 3.6519 183.128 3.65177 183.128 3.65164C181.372 2.03526 179.201 0.995552 176.88 0.632498Z"
                fill="white"
                stroke="#E5E7EB"
              />
              <ellipse
                cx="160.123"
                cy="81"
                rx="28.0342"
                ry="28.0342"
                fill="#EEF2FF"
              />
              <path
                d="M179.3 61.3061L179.3 61.3058C168.559 50.5808 151.17 50.5804 140.444 61.3061C129.703 72.0316 129.703 89.4361 140.444 100.162C151.17 110.903 168.559 110.903 179.3 100.162C190.026 89.4364 190.026 72.0317 179.3 61.3061ZM185.924 54.6832C200.31 69.0695 200.31 92.3985 185.924 106.785C171.522 121.171 148.208 121.171 133.806 106.785C119.419 92.3987 119.419 69.0693 133.806 54.683C148.208 40.2965 171.522 40.2966 185.924 54.6832Z"
                stroke="#E5E7EB"
              />
              <path
                d="M190.843 119.267L182.077 110.492C184.949 108.267 187.537 105.651 189.625 102.955L198.39 111.729L190.843 119.267Z"
                stroke="#E5E7EB"
              />
              <path
                d="M219.183 125.781L219.183 125.78L203.374 109.988C203.374 109.987 203.374 109.987 203.373 109.986C202.057 108.653 199.91 108.657 198.582 109.985L198.931 110.335L198.582 109.985L189.108 119.459C187.792 120.775 187.796 122.918 189.105 124.247L189.108 124.249L204.919 140.06C208.85 143.992 215.252 143.992 219.183 140.06C223.13 136.113 223.13 129.728 219.183 125.781Z"
                fill="#A5B4FC"
                stroke="#818CF8"
              />
              <path
                d="M163.246 87.2285C162.6 87.2285 162.064 86.6926 162.064 86.0305C162.064 83.3821 158.06 83.3821 158.06 86.0305C158.06 86.6926 157.524 87.2285 156.862 87.2285C156.215 87.2285 155.679 86.6926 155.679 86.0305C155.679 80.2294 164.444 80.2451 164.444 86.0305C164.444 86.6926 163.908 87.2285 163.246 87.2285Z"
                fill="#4F46E5"
              />
              <path
                d="M173.414 77.0926H168.464C167.802 77.0926 167.266 76.5567 167.266 75.8946C167.266 75.2483 167.802 74.7123 168.464 74.7123H173.414C174.076 74.7123 174.612 75.2483 174.612 75.8946C174.612 76.5567 174.076 77.0926 173.414 77.0926Z"
                fill="#4F46E5"
              />
              <path
                d="M151.66 77.0925H146.71C146.048 77.0925 145.512 76.5565 145.512 75.8945C145.512 75.2481 146.048 74.7122 146.71 74.7122H151.66C152.306 74.7122 152.842 75.2481 152.842 75.8945C152.842 76.5565 152.306 77.0925 151.66 77.0925Z"
                fill="#4F46E5"
              />
              <path
                d="M118.413 22.8803C118.413 22.1251 119.025 21.5128 119.781 21.5128H158.071C158.827 21.5128 159.439 22.1251 159.439 22.8803C159.439 23.6356 158.827 24.2479 158.071 24.2479H119.781C119.025 24.2479 118.413 23.6356 118.413 22.8803Z"
                fill="#4F46E5"
              />
              <path
                d="M118.413 136.385C118.413 134.874 119.638 133.65 121.148 133.65H170.379C171.89 133.65 173.114 134.874 173.114 136.385C173.114 137.895 171.89 139.12 170.379 139.12H121.148C119.638 139.12 118.413 137.895 118.413 136.385Z"
                fill="#A5B4FC"
              />
              <path
                d="M118.413 31.0854C118.413 30.3302 119.025 29.7179 119.781 29.7179H130.721C131.476 29.7179 132.088 30.3302 132.088 31.0854C132.088 31.8407 131.476 32.4529 130.721 32.4529H119.781C119.025 32.4529 118.413 31.8407 118.413 31.0854Z"
                fill="#4F46E5"
              />
              <circle cx="136.191" cy="31.0854" r="1.36752" fill="#4F46E5" />
              <circle cx="141.661" cy="31.0854" r="1.36752" fill="#4F46E5" />
              <circle cx="147.131" cy="31.0854" r="1.36752" fill="#4F46E5" />
            </svg>
            <div class="block text-center mt-5">
              <h5 class="md:text-xl text-lg leading-8 text-gray-900 font-medium mb-1.5">
                <span class="text-indigo-600 font-semibold ">Oops!</span> It
                seems like you've taken a wrong turn
              </h5>
              <p class="text-sm text-gray-500">
                We're working to bring it back.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  console.log(error);

  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center font-Suwannaphum mb-12 bg-gradient-to-r from-[#d946ef] to-[#f0abfc]  bg-clip-text text-transparent ">
            All Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((pro) => (
              <a
                href={pro.id}
                onClick={() => {
                  handleDetail(pro.id);
                }}
                key={pro.id}
                data-aos="zoom-in"
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl  cursor-pointer"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={Array.isArray(pro.images) ? pro.images[0] : pro.images}
                    alt={pro.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
                      <i className="fas fa-heart" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <i className="fas fa-shopping-cart" /> Add to Cart
                    </button>
                  </div>
                  <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">
                    NEW
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                        {pro.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {pro.description && pro.description.length > 50
                          ? pro.description.slice(0, 50) + "..."
                          : pro.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-indigo-600">
                        ${pro.price}
                      </p>
                      <p className="text-xs text-gray-400 line-through">
                        {pro.discountPercentage
                          ? `$${(
                              pro.price /
                              (1 - pro.discountPercentage / 100)
                            ).toFixed(2)}`
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-gray-500 text-xs ml-2 flex gap-2 flex-wrap">
                      {Array.isArray(pro.tags)
                        ? pro.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-xl bg-pink-400 text-white px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))
                        : pro.tags && (
                            <span className="rounded-xl bg-pink-400 text-white px-3 py-1">
                              {pro.tags}
                            </span>
                          )}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Featured Product with Floating Animation
          // <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
          //   <div className="flex flex-col md:flex-row">
          //     <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          //       <span className="text-white/90 font-semibold mb-2">
          //         LIMITED EDITION
          //       </span>
          //       <h2 className="text-3xl font-bold text-white mb-4">
          //         Premium Wireless Earbuds
          //       </h2>
          //       <p className="text-white/80 mb-6">
          //         Experience crystal-clear sound with our latest
          //         noise-cancelling technology and 24-hour battery life.
          //       </p>
          //       <div className="flex items-center mb-6">
          //         <div className="text-yellow-300 mr-2">
          //           <i className="fas fa-star" />
          //           <i className="fas fa-star" />
          //           <i className="fas fa-star" />
          //           <i className="fas fa-star" />
          //           <i className="fas fa-star" />
          //         </div>
          //         <span className="text-white/80 text-sm">
          //           4.9/5 (1,240 reviews)
          //         </span>
          //       </div>
          //       <div className="flex items-end gap-4 mb-6">
          //         <span className="text-3xl font-bold text-white">$149.99</span>
          //         <span className="text-lg text-white/60 line-through">
          //           $199.99
          //         </span>
          //         <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          //           25% OFF
          //         </span>
          //       </div>
          //       <button className="bg-white hover:text-gray-200 cursor-pointer hover:bg-blue-400  text-indigo-600 py-3 px-6 rounded-lg font-bold transition-colors duration-300 w-fit flex items-center gap-2">
          //         <i className="fas fa-bolt" /> Shop Now
          //       </button>
          //     </div>
          //     <div className="md:w-1/2 flex items-center justify-center p-8">
          //       <img
          //         src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          //         alt="Wireless Earbuds"
          //         className="max-h-80 object-contain animate-float"
          //       />
          //     </div>
          //   </div>
          // </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
