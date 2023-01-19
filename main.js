// Declaracion de base de datos sincronica

const dbSincronica=[
    {nombre:"Anamorphine",precio:890,articulo:"a",imagen:"./assets/img/tarjeta_a.jpg",imagenDos:"./assets/img/tarjeta_aDos.jpg",imagenTres:"./assets/img/tarjeta_aTres.jpg",descripcion:"Peonías y Rosas Damascenas + Frambuesas",about:"Inspirada en una tarde en el soleado Jardín de las Tullerías en Paris, cuando el aire es cálido con olor a flores de primavera. Anamorphine exalta el aroma floral fresco y celestial de los capullos recién florecidos."},
    
    {nombre:"Monogram",precio:750,articulo:"b",imagen:"./assets/img/tarjeta_b.jpg",imagenDos:"./assets/img/tarjeta_bDos.jpg",imagenTres:"./assets/img/tarjeta_bTres.jpg",descripcion:"Cuero Italiano, Hojas de Violeta y Sándalo",about:"Un aroma clásico remezclado. Monogram es lujoso, perfumado y en capas con el aroma del cuero italiano. Siéntete elegante cada vez que la enciendas."},

    {nombre:"Euphoriasme",precio:640,articulo:"c",imagen:"./assets/img/tarjeta_c.jpg",imagenDos:"./assets/img/tarjeta_cDos.jpg",imagenTres:"./assets/img/tarjeta_cTres.jpg",descripcion:"Croissant con Frambuesas + Agua de Rosas y Arándanos",about:"El olor de una panadería parisina en una vela. Los croissants recién salidos del horno, la Crème Brulée brilla en la ventana y los ramos de flores frescos y coloridos se colocan sobre la encimera de mármol."},

    {nombre:"Topiary",precio:950,articulo:"d",imagen:"./assets/img/tarjeta_d.jpg",imagenDos:"./assets/img/tarjeta_dDos.jpg",imagenTres:"./assets/img/tarjeta_dTres.jpg",descripcion:"Como un Jardín Inglés + Hiedra y Violetas",about:"Si el color verde tuviera un olor sería Topiary. Fresco y frondoso con un toque floral. La hierba recién cortada, el té de la tarde y la brisa fresca."},

    {nombre:"Valkiria",precio:860,articulo:"e",imagen:"./assets/img/tarjeta_e.jpg",imagenDos:"./assets/img/tarjeta_eDos.jpg",imagenTres:"./assets/img/tarjeta_eTres.jpg",descripcion:"Higos, Pulpa de Melocotón, Leche de Coco y Cedro",about:"Fusiona la deliciosa jugosidad de los melocotones mezclados con higos verdes, la cremosidad de la leche de coco y el toque amaderado del cedro."},

    {nombre:"Carnal Fruit",precio:940,articulo:"f",imagen:"./assets/img/tarjeta_f.jpg",imagenDos:"./assets/img/tarjeta_fDos.jpg",imagenTres:"./assets/img/tarjeta_fTres.jpg",descripcion:"Ruibarbo y Rosellas Blancas + Madera de Cerezo",about:"Las frutas, la madera y el almizcle se combinan en Carnal Fruit para crear un aroma robusto e imponente. Con extractos de ruibarbo, higos maduros, rosellas blancas y un toque de madera."},

    {nombre:"Nudesse",precio:910,articulo:"g",imagen:"./assets/img/tarjeta_g.jpg",imagenDos:"./assets/img/tarjeta_gDos.jpg",imagenTres:"./assets/img/tarjeta_gTres.jpg",descripcion:"Rosa de Mayo y Rosa Damascena + Rocío",about:"La fragancia enfatiza la dulzura de los pétalos de rosa cuando la floración está en apogeo. El aroma después de la lluvia, intensamente floral, dulce y muy fresco."},

    {nombre:"Pain Au Chocolat",precio:920,articulo:"h",imagen:"./assets/img/tarjeta_h.jpg",imagenDos:"./assets/img/tarjeta_hDos.jpg",imagenTres:"./assets/img/tarjeta_hTres.jpg",descripcion:"Croissant con Chocolate y Avellanas",about:"Indulgencia francesa en una vela, masa dorada deliciosa, rellena con crema de chocolate y avellanas fileteadas. Transportate a la panadería de la esquina cerca del río Sena."},

    {nombre:"Cult",precio:750,articulo:"i",imagen:"./assets/img/tarjeta_i.jpg",imagenDos:"./assets/img/tarjeta_iDos.jpg",imagenTres:"./assets/img/tarjeta_iTres.jpg",descripcion:"Madera de Ébano, Cerezo y Pachuli",about:"Cult es un floral ahumado perfecto con toques afrutados. La combinación de la madera, el pachuli y la esencia de cerezo crean un aroma digno de obsesión."},

    {nombre:"Almond Croissant",precio:830,articulo:"j",imagen:"./assets/img/tarjeta_j.jpg",imagenDos:"./assets/img/tarjeta_jDos.jpg",imagenTres:"./assets/img/tarjeta_jTres.jpg",descripcion:"Croissant con Crema de Almendras y Licor de Amoretto",about:"Bienvenidx al cielo del Croissant. Relleno con crema de almendras y vainilla bourbon y un ligero toque de licor de amoretto. Pura dicha de Croissant."},

    {nombre:"Stems",precio:940,articulo:"k",imagen:"./assets/img/tarjeta_k.jpg",imagenDos:"./assets/img/tarjeta_kDos.jpg",imagenTres:"./assets/img/tarjeta_kTres.jpg",descripcion:"Tulipanes, Rosas, Margaritas y Cítricos",about:"Una esencia súper floral para lxs flower obssesed. Stems tiene una mezcla de flores y toques cítricos que refrescarán el ambiente."},

    {nombre:"Croissant",precio:690,articulo:"l",imagen:"./assets/img/tarjeta_l.jpg",imagenDos:"./assets/img/tarjeta_lDos.jpg",imagenTres:"./assets/img/tarjeta_lTres.jpg",descripcion:"100% Croissants Parisinos recién horneados",about:"A veces los sueños se hacen realidad, transportarte por un momento a un café parisino y disfrutar de un Croissant recién hecho. Captura perfectamente el olor a hojaldre dorado y la mantequilla derretida."},

    {nombre:"Macaron Pistache",precio:540,articulo:"m",imagen:"./assets/img/tarjeta_m.jpg",imagenDos:"./assets/img/tarjeta_mDos.jpg",imagenTres:"./assets/img/tarjeta_mTres.jpg",descripcion:"Delicioso Macarrón de Pistacho",about:"Esta vela huele exactamente como un macarrón de pistacho parisino recién hecho. No necesitás montarte en un avión, solo tienes que encenderla y serás trasportadx a Paris."},

    {nombre:"Cinnamon Roll",precio:710,articulo:"n",imagen:"./assets/img/tarjeta_n.jpg",imagenDos:"./assets/img/tarjeta_nDos.jpg",imagenTres:"./assets/img/tarjeta_nTres.jpg",descripcion:"Cinnamon Rolls + Glaseado de Vainilla",about:"Un día perfecto comienza con un Cinnamon Roll recién horneado. Hojaldre esponjoso con azúcar morena y mantequilla derretida, glaseado cremoso de vainilla. Todo eso en una vela."},

    {nombre:"Gaiasilk",precio:780,articulo:"o",imagen:"./assets/img/tarjeta_o.jpg",imagenDos:"./assets/img/tarjeta_oDos.jpg",imagenTres:"./assets/img/tarjeta_oTres.jpg",descripcion:"Palo Santo, Chocolate Blanco, Vainilla y Sándalo",about:"Una infusión de palo santo, chocolate blanco, vainilla ahumada, ámbar y sándalo. Un aroma completo con notas dulces que enriquecen el ambiente."},

    
]


