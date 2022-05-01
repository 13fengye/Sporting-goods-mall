import { MinimumDiscount } from "components/discount";
import { get } from "components/fetch";
import { NEXT_PUBLIC_URL } from "components/url";
import React, { useContext, useEffect, useState } from "react";

export default function Home(){
  // const minnewShoesNumber = 1, maxnewShoesNumber = 2;
  // const [newShoesNumber, setNewShoesNumber] =useState<number>(1);
  const [discount, setDiscount] = useState<number>(0);
  const [belongings, setBelongings] = useState<{belonging: string,img: string}[]>([]);
  const [types, setTypes] = useState<{ [x: string]: [] }[]>([]);
  const [lowPrice, setLowPrice] = useState<{ [x: string]: { [y: string] : [number, string]} }[]>([]);
  
  useEffect(() => {
    const loadDiscount = async() => {
      get('/Product/getdiscount/').then(data => {
        setDiscount(data.discount);
      });
    }
    loadDiscount();

    let t: { [x: string]: [] }[] = [];
    let l: { [x: string]: { [y: string] : [number, string]} }[] = [];
    const loadBelongings = async() => {
      await get('/Product/getbelongings/').then(data => {
        const belongingsData = data.belongs.sort((a: { belonging: string }, b: { belonging: string }) => b.belonging.localeCompare(a.belonging))
        setBelongings(belongingsData);
        belongingsData.flatMap((belonging: { belonging: string; }) => {
          let t1: {[x: string]: []}[] = [];
          const loadType = async () => {
            await get(`/Product/gettype/${belonging.belonging}/`).then(data => {
              t.push({[belonging.belonging]: data.types});
              t1 = [...t];
              data.types.flatMap((type: string) => {
                let l1: { [x: string]: { [y: string]: [number, string] } }[] = [];
                const loadLowPrice = async () => {
                  await get(`/Product/getlowestprice/${type}/`).then((data) => {
                    l.push({ [belonging.belonging]: {[type]: [data.lowestPrice, data.typeImgPath]} });
                    l1 = [...l]
                  });
                  setLowPrice(l1);
                };
                loadLowPrice();
              });
            })
            setTypes(t1);
          };
          loadType();
          
        });
      });
      
    }
    loadBelongings();
    
  }, []);

  if (types.length === 0) return<div></div>;
  // console.log(belongings);
  // console.log(types)
  // console.log(lowPrice)

  return(
    <>
      <main className="main-content">
        <section className="home-slider-area">
          <div className="swiper-container home-slider-container default-slider-container">
            <div className="swiper-wrapper home-slider-wrapper slider-default">
              <div className="swiper-slide swiper-slide-active">
                <div className="slider-content-area" style={{ backgroundImage: "url('/static/assets/img/shape/1.webp')" }}>
                  <div className="container">
                    <div className="slider-container">
                      <div className="row justify-content-between align-items-center">
                        <MinimumDiscount discount={discount}/>    
                        {/* <div className="col-sm-6 col-md-6">
                          <div className="slider-thumb">
                            <div className="thumb scene">
                              <span className="scene-layer" data-depth=".3"><img src={`/static/picture/slider-0${newShoesNumber}.webp`} width="461" height="489" alt="Image-HasTech" /></span>
                            </div>
                            <div className="shape-group mousemove">
                              <div className="shape-group-one mousemove-layer" data-speed=".8" style={{ backgroundImage: "url('/static/assets/img/shape/2.webp')" }}></div>
                              <div className="shape-group-two scene"><span className="scene-layer" data-depth=".6"><img src="/static/picture/33.webp" width="471" height="462" alt="Image-HasTech" /></span></div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <h2 className="slider-text-shape">NEW 2022</h2>
                </div>
              </div>
            </div>

            {/* <div className="swiper-btn-wrap">
              <div className="swiper-btn-prev">
                <i className={`pe-7s-angle-left ${newShoesNumber > 1 ? "" : "disabled"}`} onClick={() => {newShoesNumber > 1 ? setNewShoesNumber(newShoesNumber - 1) : setNewShoesNumber(maxnewShoesNumber)}}></i>
              </div>
              <div className="swiper-btn-next">
                <i className={`pe-7s-angle-right ${newShoesNumber < maxnewShoesNumber ? "" : "disabled"}`} onClick={() => {newShoesNumber < maxnewShoesNumber ? setNewShoesNumber(newShoesNumber + 1) : setNewShoesNumber(minnewShoesNumber) }}></i>
              </div>
            </div> */}
          </div>
        </section>

        { belongings.map((thisbelonging: { belonging: string, img: string }) => { 
            const index = types.findIndex((type: { [x: string]: [] }) => type[thisbelonging.belonging] !== undefined);
            const index2 = lowPrice.findIndex((lowPrice: { [x: string]: { [y: string]: [number, string] } }) => lowPrice[thisbelonging.belonging] !== undefined);
            
            return(
              <section className="product-area product-collection-area" style={{ backgroundColor: 'GrayText'}}>
              {/* <section className="product-area product-collection-area" style={{ backgroundImage: `url('${NEXT_PUBLIC_URL}/${thisbelonging.img}')`,backgroundRepeat: 'round', backgroundSize: 'cover'}}> */}
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h3 className="title">{thisbelonging.belonging}</h3>
                        <div className="desc">
                          {/* <p>There are many variations of passages of Lorem Ipsum available</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  { index !== -1 && types[index][thisbelonging.belonging].length > 0 &&
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="product-collection">
                          {types[index][thisbelonging.belonging].map((type: string)=>{
                            return(
                              <div className="inner-content">
                                { index2 !== -1 && <>
                                <div className="product-collection-content">
                                  <div className="content">
                                    <h3 className="title"><a href="/shop">{type}</a></h3>
                                    <h4 className="price">最低价￥{lowPrice[index2][thisbelonging.belonging][type][0]}起</h4>
                                  </div>
                                </div>
                                <div className="product-collection-thumb" style={{ backgroundImage: `url('${NEXT_PUBLIC_URL}/${lowPrice[index2][thisbelonging.belonging][type][1]}')`}}></div>
                                </>
                                }
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div> }
                </div>
              </section>
            )
          })}
      </main>
    </>
  );
}
