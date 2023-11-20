import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import { db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function TotalProduct() {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/product/${data.id}`, { state: { productData: data } });
  };
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = async (brand, model, id) => {
          const docRef = doc(db, brand, model);
          const docSnap = await getDoc(docRef);
          return docSnap.exists() ? { ...docSnap.data(), id } : null;
        };

        const [dataHonda, dataKIA, dataKIAMN, dataVINA] = await Promise.all([
          getData("HONDA", "HONDA CIVIC RS", "hondaCivic"),
          getData("KIA", "KIA CARNIVAL", "kiaCarnival"),
          getData("KIA", "KIA MORNING MT", "kiaMorning"),
          getData("VINFAST", "VINFAST LUX A 2.0 PLUS", "vinLuxA"),
        ]);

        if (dataHonda && dataKIA && dataKIAMN && dataVINA) {
          const combinedData = [dataHonda, dataKIA, dataKIAMN, dataVINA];
          setCarData(combinedData);
        } else {
          console.log("One or both documents do not exist!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Xe lướt miền Trung</h2>
          <Filter />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
          {carData?.map((data) => (
            <Product
              key={data.id}
              srcImg={data.img}
              price={data.price}
              title={data.name}
              kmNumber={data.kmTraveled}
              year={data.year}
              onClick={() => handleClick(data)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default TotalProduct;
