import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-solid rounded-md border-spacing-1 border-2 border-slate-300 scale-95 ml-20">
      <div className=" bg-white">
        <div className="flex justify-center mt-5"></div>
        <div className="">
          <div className="menu p-4 w-80  bg-white">
            {/* <!-- Sidebar content here --> */}
            <div>
              <div className="bg-white mb-2 text-black border-b-2 h-24 text-lg">
                <div className="text-lg ml-3">Tamplikan Berdasarkan</div>

                <div className="flex items-center h-1/2 w-full justify-center">
                  <div className="badge badge-outline m-2 w-32 h-8 text-lg bg-slate-200">
                    Paling Sesuai
                  </div>
                  <div className="badge badge-outline m-2 w-32 h-8 text-lg bg-slate-200">
                    Paling Baru
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white mb-2 text-black border-b-2 h-52 text-lg">
                <div className="text-lg ml-3 mt-3 mb-3">Tipe Pekerjaan</div>

                <div className=" items-center h-1/2 w-full ml-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="magang"
                      name="tipe"
                      value="magang"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="magang">
                      Magang
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fullTime"
                      name="tipe"
                      value="fulltime"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="fullTime">
                      Full Time
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="partTime"
                      name="tipe"
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="partTime">
                      Part Time
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="freelance"
                      name="tipe"
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="freelance">
                      Freelance
                    </label>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Kerja remote */}
            <div>
              <div className="bg-white mb-2 text-black border-b-2 h-16 text-lg flex items-center">
                <input type="checkbox" className="toggle toggle-lg ml-3" />
                <label className="text-lg font-semibold ml-3">
                  Bisa Kerja Remote
                </label>
              </div>
            </div>

            {/* Kota start */}
            <div>
              <div className="bg-white mb-2 text-black border-b-2 h-60 text-lg">
                <div className="text-lg ml-3 mt-3 mb-3">Kota</div>
                <div className=" items-center h-1/2 w-full ml-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="jakarta"
                      name=""
                      value="jakarta"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="jakarta">
                      Jakarta, Indonesia
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="tangerang"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="tangerang">
                      Tangerang, Indonesia
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Bandung"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="Bandung">
                      Bandung, Indonesia
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Yogyakarta"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="Yogyakarta">
                      Yogyakarta, Indonesia
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Surabaya"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="Surabaya">
                      Surabaya, Indonesia
                    </label>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Pengalaman */}
            <div>
              <div>
                <div className="bg-white mb-2 text-black border-b-2 h-80 text-lg">
                  <div className="text-lg ml-3 mt-3 mb-3">Pengalaman</div>
                  <div className=" items-center h-1/2 w-full ml-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="kurangSetahun"
                        name=""
                        value="kurangSetahun"
                        className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                      />
                      <label className="ml-2 mb-2" for="jakarta">
                        Kurang dari setahun
                      </label>
                      <br />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="satuTiga"
                        name=""
                        value="HTML"
                        className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                      />
                      <label className="ml-2 mb-2" for="satuTiga">
                        1 - 3 tahun
                      </label>
                      <br />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="tigaLima"
                        name=""
                        value="HTML"
                        className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                      />
                      <label className="ml-2 mb-2" for="tigaLima">
                        3 - 5 tahun
                      </label>
                      <br />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="limaSepuluh"
                        name=""
                        value="HTML"
                        className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                      />
                      <label className="ml-2 mb-2" for="limaSepuluh">
                        5 - 10 tahun
                      </label>
                      <br />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sepuluhLebih"
                        name=""
                        value="HTML"
                        className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                      />
                      <label className="ml-2 mb-2" for="sepuluhLebih">
                        Lebih dari sepuluh tahun
                      </label>
                      <br />
                    </div>
                    <div className="bg-white text-black h-16 text-lg flex items-center mt-4">
                      <input type="checkbox" className="toggle toggle-lg" />
                      <label className="text-lg font-semibold ml-3">
                        Selain pekerjaan tanpa pengalaman
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kategori start */}
            <div>
              <div className="bg-white mb-2 text-black border-b-2 h-60 text-lg">
                <div className="text-lg ml-3 mt-3 mb-3">Kategori Pekerjaan</div>
                <div className=" items-center h-1/2 w-full ml-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="business"
                      name=""
                      value="business"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="jakarta">
                      Business
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="marketing"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="marketing">
                      Marketing
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="technology"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="technology">
                      Technology
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="desain"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="desain">
                      Desain
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="lainnya"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="lainnya">
                      Lainnya
                    </label>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Diperbarui start */}
            <div>
              <div className="bg-white mb-2 text-black  h-52 text-lg">
                <div className="text-lg ml-3 mt-3 mb-3">Terakhir Diperbarui</div>
                <div className=" items-center h-1/2 w-full ml-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="24jam"
                      name=""
                      value="24jam"
                      className=" bg-gray-200 border-2 border-gray-200 rounded-full ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="jakarta">
                      24 Jam Terakhir
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="seminggu"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded-full ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="seminggu">
                      Seminggu Terakhir
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sebulan"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded-full ring-0 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="sebulan">
                      Sebulan Terakhir
                    </label>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="kapanpun"
                      name=""
                      value="HTML"
                      className=" bg-gray-200 border-2 border-gray-200 rounded-full ring-100 h-6 w-6 text-gray-900 focus:outline-none focus:bg-green-700"
                    />
                    <label className="ml-2 mb-2" for="kapanpun">
                      Kapanpun
                    </label>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
