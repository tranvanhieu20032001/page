import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

function ItemPage({items}) {
  const listitems = [
    {
      id: 1,
      type: "all",
      des:'TOI 3D Customize E-commerce',
      img: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png",
    },
    {
      id: 2,
      type: "all",
      des:'E-learning – Internal training platform',
      img: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
    },
    {
      id: 3,
      type: "all",
      des:'Summer 21 Cosmetic E-commerce Platform',
      img: "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
    },
    {
      id: 4,
      type: "all",
      des:'Kiva – Ambition to digital transformation in the brokerage assiduity',
      img: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      id: 5,
      type: "all",
      des:'Boxgo – Professional Warehouse Management',
      img: "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
    },
    {
        id: 6,
        type: "supply",
        des:'Dsoft',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-dsoft.jpg",
      },
      {
        id: 7,
        type: "supply",
        des:'MITC',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-mitc.jpg",
      },
      {
        id: 8,
        type: "supply",
        des:'Tego',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-tego.jpg",
      },
      {
        id: 9,
        type: "supply",
        des:'MOR',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-mor.jpg",
      },
      {
        id: 10,
        type: "supply",
        des:'Code Complete',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-code-complete.jpg",
      },
      {
        id: 11,
        type: "supply",
        des:'Smart Dev',
        img: "https://tekup.vn/wp-content/uploads/2022/09/doitac-smart-dev.jpg",
      },
  ];
  console.log(items);
  const itemall = listitems.filter(({type})=> type==='all')
  const itemsupply = listitems.filter(({type})=> type==='supply')
  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {items==="all"?itemall.map(({ id,des,img }) => (
          <div key={id} className="hover:-translate-y-1 transition-all shadow-md hover:shadow-lg rounded-md relative">
            <img src={img}/>
            <div className="absolute z-10 bottom-0 left-0 w-full">
              <div className="flex justify-between items-center rounded-md shadow-md font-bold text-md p-3 bg-[#ffffff] m-4">
                <h6 className="text-left">{des}</h6>
                <MdNavigateNext/>
              </div>
            </div>
          </div>
        )):itemsupply.map(({id,des,img })=>(
            <div key={id} className="hover:-translate-y-1 transition-all shadow-md hover:shadow-lg rounded-md relative">
            <img src={img}/>
            <div className="absolute z-10 bottom-0 left-0 w-full">
              <div className="flex justify-between items-center rounded-md shadow-md font-bold text-md p-3 bg-[#ffffff] m-4">
                <h6 className="text-left">{des}</h6>
                <MdNavigateNext/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemPage;
