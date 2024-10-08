import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import happyUsers from "../data/happyUsers.json";
import { UseContext } from "../components/context/Context";

const Home = () => {
  const navigate = useNavigate();
  const { user, estadoUsuario, setEstadoUsuario } = UseContext();

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const refa = useRef(null);
  const refb = useRef(null);
  const refc = useRef(null);
  const inView0 = useInView(ref0);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);
  const inViewa = useInView(refa);
  const inViewb = useInView(refb);
  const inViewc = useInView(refc);

  const refS1 = useRef(null);
  const refS2 = useRef(null);
  const refS3 = useRef(null);
  const refS4 = useRef(null);
  const isInViewS1 = useInView(refS1, { once: false });
  const isInViewS2 = useInView(refS2, { once: false });
  const isInViewS3 = useInView(refS3, { once: false });
  const isInViewS4 = useInView(refS4, { once: false });
  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  };

  useEffect(() => {
    if (estadoUsuario == 1) {
      setEstadoUsuario(0);
      location.reload();
    }
  }, [])

  return (
    <div className={styles.Home}>
      <div className={styles.panel0}>
        <div className={styles.articulo0}>
          <div className={styles.articulo0Cont}>
            <div className={styles.presentacion0Cont}>
              <h2 className={styles.titulo0}>Potenciá tu futuro:</h2>
              <p className={styles.descripcion0}>
                Descubrí la primera plataforma P2P que te guía para sacar tu
                primer préstamo personal y hacer crecer tu dinero.
              </p>
              <div className={styles.boton0Cont}>
                <div to="/prestamos" className={styles.bCont}>
                  <button
                    className="buttonB"
                    onClick={() => user === null ? navigate("/iniciar-sesion") : navigate("/prestamos")}
                  >
                    Simular préstamo
                  </button>
                  <button onClick={() => user === null ? navigate("/iniciar-sesion") : navigate("/inversiones")}>
                    Invertir
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.imagen0Cont}>
              <div className={styles.hero}>
                <img src="Aro.svg" alt="" className={styles.aro} />
                <img src="FotoChico.png" alt="" className={styles.fchico} />
                <img src="FotoChica.png" alt="" className={styles.fchica} />
                <img src="estrella.svg" alt="" className={styles.estrella} />
                <img src="estrella.svg" alt="" className={styles.estrella2} />
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313166/Cashfly/Group_64_veqynh.svg"
                  className={styles.eye}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.section
        className={styles.seccion1}
        initial={"isOff"}
        animate={isInViewS1 === true ? "isOn" : "isOff"}
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={estilosDeCarga}
      >
        <div className={styles.articulo1} ref={refS1}>
          <div className={styles.tittleCont1}>
            <h4 className={styles.titulo1}>¿Cómo sacar tu primer préstamo?</h4>
            <p>
              Te guiamos paso a paso para que puedas realizar tu préstamo de
              manera simple. Tené en cuenta los siguientes requisitos
            </p>
          </div>
          <div className={styles.carrucelCont}>
            <div className={styles.carrucel1}>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref0}>
                  <div
                    className={styles.imgCont1a}
                    initial={"isOff"}
                    animate={isInViewS1 === true ? "isOn" : "isOff"}
                    transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
                    variants={estilosDeCarga}
                  >
                    <img
                      className={styles.step1img}
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280913/Cashfly/contact_mail_mplc3z.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont}>
                    <h2>Identidad</h2>
                    <p>Tené a mano tu DNI</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref1}>
                  <div className={styles.imgCont1b}>
                    <img
                      className={styles.step2img}
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280912/Cashfly/account_balance_dxnbif.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont}>
                    <h2>Cuenta bancaria</h2>
                    <p>Tenés que tener cuenta bancaria</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref2}>
                  <div className={styles.imgCont1c}>
                    <img
                      className={styles.step3img}
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280930/Cashfly/payments_d3x2m6.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont}>
                    <h2>Monto</h2>
                    <p>Elegí la cantidad de dinero</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref3}>
                  <div className={styles.imgCont1d}>
                    <img
                      className={styles.step4img}
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280927/Cashfly/search_check_xl2yyo.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont}>
                    <h2>Validación</h2>
                    <p>Tenemos que validar tus datos</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref4}>
                  <div className={styles.imgCont1e}>
                    <img
                      className={styles.step5img}
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280913/Cashfly/currency_exchange_yj0rcl.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont}>
                    <h2>Dinero Disponible</h2>
                    <p>En unas horas tenés tu préstamo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paginaCont}>
            <div
              className={styles.pagina}
              style={
                inView0
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView1
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView2
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView3
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView4
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className={styles.seccion2}
        initial={"isOff"}
        animate={isInViewS2 === true ? "isOn" : "isOff"}
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={estilosDeCarga}
      >
        <div className={styles.articulo2}>
          <h4 className={styles.titulo2} ref={refS2}>
            Unite a la nueva comunidad de inversores :)
          </h4>
          <p>
            Se parte del mundo financiero y compartí tu futuro con personas como
            vos.
          </p>
          <Link to="/registrarme">
            <button>Registrarme</button>
          </Link>
        </div>
      </motion.section>
      <motion.section
        className={styles.seccion3}
        initial={"isOff"}
        animate={isInViewS3 === true ? "isOn" : "isOff"}
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={estilosDeCarga}
      >
        <div className={styles.articulo3}>
          <div className={styles.tittleCont3}>
            <div className={styles.tCont3}>
              <h2 ref={refS3}>Usuarios felices</h2>
              <p className={styles.descripcion3}>
                Nuestros usuarios demuestran su conformidad y felicidad al poder
                usar una aplicación que lo ayude a simplificar su vida.
              </p>
            </div>
            <div className={styles.tCont3b}></div>
          </div>
          <div className={styles.panel3}>
            <div className={styles.carrucel3}>
              {happyUsers.map((usuario, i) => (
                <div
                  className={styles.card}
                  key={i}
                >
                  <img src={usuario.img} alt="" />
                  <h2>{usuario.nombre}</h2>
                  <p>{usuario.descripcion}</p>
                  <div className={styles.estrellasCont}>
                    {usuario.estrellas.map((estrella, i) => (
                      <img
                        src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713639791/Cashfly/Vector_x0ec5y.svg"
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <section className={styles.seccion4}>
        <motion.div
          className={styles.articulo1}
          initial={"isOff"}
          animate={isInViewS4 === true ? "isOn" : "isOff"}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          variants={estilosDeCarga}
        >
          <div className={styles.tittleCont4} ref={refS4}>
            <h4 className={styles.titulo1}>Aprende a gestionar tus finanzas</h4>
            <p>Registrate para aprender a pedir préstamos, manejar tus finanzas y crecer económicamente.</p>
          </div>
          <div className={styles.carrucelCont}>
            <div className={styles.carrucel4}>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={refa}>
                  <div className={styles.imgCont4}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755495/Cashfly/Image0_tlqdvs.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont4}>
                    <h2>Inversiones</h2>
                    <div className={styles.linkGuide}>
                      <h2>Descubre el Poder de Hacer Crecer tu Dinero</h2>
                      <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755827/Cashfly/Icon_wrap_ildzw9.svg" alt="" />
                    </div>
                    <p>Sumérgete en nuestra sección de inversiones y aprende cómo hacer que tu dinero trabaje para ti. Desde conceptos básicos hasta estrategias avanzadas, aquí encontrarás todo lo que necesitas para comenzar a invertir.</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={refb}>
                  <div className={styles.imgCont4}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755496/Cashfly/Image2_h6rlyg.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont4}>
                    <h2>Préstamos</h2>
                    <div className={styles.linkGuide}>
                      <h2>Entendiendo y Dominando los Préstamos</h2>
                      <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755827/Cashfly/Icon_wrap_ildzw9.svg" alt="" />
                    </div>
                    <p>En esta sección, te guiaremos a través del mundo de los préstamos de manera inteligente y responsable. Aprende cómo obtener el financiamiento que necesitas para tus proyectos sin comprometer tu futuro financiero.</p>
                  </div>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={refc}>
                  <div className={styles.imgCont4}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755498/Cashfly/Image_cvcpts.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.tipTCont4}>
                    <h2>Tu Futuro</h2>
                    <div className={styles.linkGuide}>
                      <h2>Construyendo tu Futuro Financiero</h2>
                      <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713755827/Cashfly/Icon_wrap_ildzw9.svg" alt="" />
                    </div>
                    <p>Prepárate para el futuro y asegura tu estabilidad financiera con nuestra sección dedicada a tu futuro. Desde la planificación de ahorros hasta la jubilación anticipada, aquí encontrarás recursos para tomar el control de tu destino.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paginaCont}>
            <div
              className={styles.pagina}
              style={
                inViewa
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inViewb
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inViewc
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
