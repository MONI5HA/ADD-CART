import "./App.css";
import { React, useState } from "react";

function App() {
  let [cartIteam, setcartIteam] = useState([]);
  let [cart, setCart] = useState(0);
  let [total, settotal] = useState(0);

  function addCart(items) {
    setCart(cart + 1);
    settotal((val) => val + items.price);
    cartIteam.push(items);
  }

  function deleteCart(e) {
    cartIteam.splice(cartIteam.indexOf(e), 1);
    setCart(cart - 1);
    settotal((val) => val - e.price);
  }
  function close() {
    let box = document.querySelector(".cart-box");
    box.style.display = "none";
  }
  function view_cart() {
    let box = document.querySelector(".cart-box");
    box.style.display = "inline";
  }

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container px-4 px-lg-5">
          <h1 class="navbar-brand bg-warning p-2" href="#!">
            Dress
          </h1>
          <p class="display-5">Shopping Cart</p>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <a
                class="btn btn-outline-dark"
                onClick={() => view_cart()}
                title="Click to View"
              >
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {cart}
                </span>
              </a>
            </form>
            <div>
              <button class=" price-tag btn btn-outline-ligth ">
                Price:
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  ${total}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="cart-box">
        <a href="#" className="close" onClick={() => close()}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>

        <hr />

        <h2>No Items Found</h2>
        {cartIteam.map((e) => {
          return (
            <div className="cart">
              <img src={e.img} />
              <div className="cart-text">
                <div className="title">{e.product}</div>
                <b>Price</b> : ${e.price}
                <br></br>
                <b>Size</b> : {e.size}
                <button class="btn btn-danger" onClick={() => deleteCart(e)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Products</h1>
          </div>
        </div>
      </header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://m.media-amazon.com/images/I/31tmrgxq6jL.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Neostreak Men's Casual Shirt</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-half"></div>
                    </div>
                    <b>size</b>:large<br></br>
                    <span class="text-muted text-decoration-line-through">
                      $30.00
                    </span>
                    $28.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class=" click btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          id: 0,
                          product: "Neostreak Men's Casual Shirt",
                          price: 28,
                          img: "https://m.media-amazon.com/images/I/31tmrgxq6jL.jpg",
                          size: "Large",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://images.pexels.com/photos/10230678/pexels-photo-10230678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Lymio Women's Top (D-460-Pista-M)</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <b>size</b>:Medium<br></br>
                    <span class="text-muted text-decoration-line-through">
                      $35.00
                    </span>
                    $30.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class=" click btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          id: 1,
                          size: "Medium",
                          product: "Lymio Women's Top (D-460-Pista-M)",
                          price: 30,
                          img: "https://images.pexels.com/photos/10230678/pexels-photo-10230678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://m.media-amazon.com/images/I/71tHEf94tqL._UY679_.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">R&B Men Stretch Dress Shirt</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <b>size</b>:Large-XL<br></br>
                    <span class="text-muted text-decoration-line-through">
                      $40.00
                    </span>
                    $35.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          id: 2,
                          size: "Large-XL",
                          img: "https://m.media-amazon.com/images/I/71tHEf94tqL._UY679_.jpg",
                          product: "Sale Item",
                          price: 35,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/11758148/2020/6/14/53fa0790-d6b3-4d1a-b084-79cd8cfc64ee1592128851635AMERICANEAGLEOUTFITTERSWomenBlueRegularFitSolidCasualShirtSh1.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">PATRORNA Women's Butterfly Top</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <b>size</b>:Small<br></br>
                    $50.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          size: "Small",
                          img: "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/11758148/2020/6/14/53fa0790-d6b3-4d1a-b084-79cd8cfc64ee1592128851635AMERICANEAGLEOUTFITTERSWomenBlueRegularFitSolidCasualShirtSh1.jpg",
                          product: "PATRORNA Women's Butterfly Top",
                          price: 50,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://m.media-amazon.com/images/I/31fZodupSvL.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Marutinandan nx Women's Georgette</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star"></div>
                    </div>
                    <b>size</b>:Small<br></br>
                    <span class="text-muted text-decoration-line-through">
                      $100.00
                    </span>
                    $75.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          size: "Small",
                          product: "Marutinandan nx Women's Georgette",
                          price: 75,
                          img: "https://m.media-amazon.com/images/I/31fZodupSvL.jpg",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdYuDiHpqG-oXmeqB1yIxJp_sSCMJ6RowccsE6LgrA3uKQJSxhhrVy_JZELiOSKFOpf4&usqp=CAU"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">
                      Regular Men's Cotton Designer T-Shirt
                    </h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star"></div>
                    </div>
                    <b>size</b>:Large<br></br>
                    $120
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          size: "Large",
                          product: "Regular Men's Cotton Designer T-Shirt",
                          price: 120,
                          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdYuDiHpqG-oXmeqB1yIxJp_sSCMJ6RowccsE6LgrA3uKQJSxhhrVy_JZELiOSKFOpf4&usqp=CAU",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/w/twdr061_1.jpg?rnd=20200526195200"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">
                      Women's Ankle Length Long Dress with Shrug
                    </h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-half"></div>
                    </div>
                    <b>size</b>:Large<br></br>
                    <span class="text-muted text-decoration-line-through">
                      $100.00
                    </span>
                    $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          size: "Large",
                          product: "Women's Ankle Length Long Dress with Shrug",
                          price: 80,
                          img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/w/twdr061_1.jpg?rnd=20200526195200",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMUr47VvDbr9FO0QQtpL8ogQGpr6kpsTINd8MOYp3ALLdfeg3gGDEcKIVW8fdTAQbhws&usqp=CAU"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">
                      Scott International Men's Regular Fit T-Shirt
                    </h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <b>size</b>:Large-XL<br></br>
                    $37.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button
                      title="Click to Add"
                      class="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        addCart({
                          size: "Large-XL",
                          product: "Scott International Men's Fit T-Shirt",
                          price: 37,
                          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMUr47VvDbr9FO0QQtpL8ogQGpr6kpsTINd8MOYp3ALLdfeg3gGDEcKIVW8fdTAQbhws&usqp=CAU",
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
