import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";

const FilterBar = () => { 
  const filterOption = [
    "Produits proches de la date limite",
    "Moins de 5 TND",
    "Offres de dernière minute",
    "Produits invendus",
    "Partage local",
  ];

  const [activeBtn, setActiveBtn] = useState();
  const dispatch = useDispatch();

  const handleFilterBtn = (filtername) => {
    // console.log(filtername);
    setActiveBtn(activeBtn === filtername ? null : filtername);
  };
  useEffect(() => {
    dispatch(setFilterValue(activeBtn));// Dispatch the filter value to Redux store
  }, [activeBtn, dispatch]);

  return (
    <>
      <div className="my-2 flex flex-wrap gap-5 justify-center">
        {filterOption.map((filtername,index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilterBtn(filtername)}
              className={
                "filterbtn flex gap-2 " +
                (activeBtn === filtername ? "active" : "")
              }
            >
              <p>{filtername}</p>
              <i className="fi fi-br-cross mt-1 text-sm hidden"></i>
            </button>
          );
        })}
      </div>
    </>
  );
};
export default FilterBar;
