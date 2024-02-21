document.addEventListener('DOMContentLoaded', function() {
    document.body.style.margin = '0';
    document.body.style.overflowX = 'hidden';
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';

    // CREAR HEADER  MAS ESTILOS
    const encabezado = document.createElement('header');
    Object.assign(encabezado.style, {
        fontSize: '20px',
        backgroundColor: 'rgba(231, 231, 231, 0.418)',
        color: 'rgb(206, 206, 206)',
        paddingInline: '10px',
        height: '70px',
        top: '0',
        width: '100%',
        zIndex: '1000',
        backdropFilter: 'blur(30px)',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    });

    // LOGO HEADER
    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';
    logoDiv.style.marginLeft = '1%';
    const logoImg = document.createElement('img');
    logoImg.src = 'img/Captura_de_pantalla_2024-02-20_221900-removebg-preview.png'; 
    logoImg.alt = '';
    logoImg.style.width = '50px'; 
    logoDiv.appendChild(logoImg);

    // CREAMOS NAV
    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.marginLeft = '7%';
    const enlaces = [
        { href: '#seccion0', text: 'Inicio' },
        { href: '#seccion1', text: 'Historia IA' },
        { href: '#seccion2', text: 'Peligros IA' }
    ];

    enlaces.forEach(enlace => {
        const a = document.createElement('a');
        Object.assign(a.style, {
            color: 'rgb(0, 0, 0)',
            textDecoration: 'none',
            margin: '10px',
            padding: '10px',
            borderRadius: '8px',
        });
        a.className = 'btnheader';
        a.href = enlace.href;
        a.textContent = enlace.text;
        a.onmouseover = () => a.style.backgroundColor = 'rgb(219, 219, 219)';
        a.onmouseout = () => a.style.backgroundColor = 'transparent';
        a.onclick = () => {
            const idSeccionObjetivo = enlace.href.slice(1); 
            const seccionObjetivo = document.getElementById(idSeccionObjetivo);
            if (seccionObjetivo) {
                window.scrollTo({
                    top: seccionObjetivo.offsetTop, 
                    behavior: 'smooth' 
                });
            }
        };
        nav.appendChild(a);
    });

    // CREAR TOGGLE CON STILO
    const toggleDiv = document.createElement('div');
    toggleDiv.className = 'toggle-switch';
    Object.assign(toggleDiv.style, {
        marginRight: '2%',
        position: 'relative',
        width: '60px',
        height: '34px',
    });

    // ELEMENTO LABEL
    const label = document.createElement('label');
    label.className = 'switch-label';
    Object.assign(label.style, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        borderRadius: '34px',
        cursor: 'pointer',
    });

    // ELEMTO CHECBOX
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.style.display = 'none';

    // ELEMENTO DEL SLIDER 
    const slider = document.createElement('span');
    slider.className = 'slider';
    Object.assign(slider.style, {
        position: 'absolute',
        width: '26px',
        height: '26px',
        left: '4px',
        bottom: '4px',
        backgroundColor: 'white',
        borderRadius: '50%',
        transition: '.4s',
    });

    // TOGGLE CAMBIOS AL CLIKCAR 
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            label.style.backgroundColor = '#2196F3';
            
            slider.style.transform = 'translateX(26px)';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
            label.style.backgroundColor = '#ccc';
            slider.style.transform = 'translateX(0)';
        }
    });
    // AÑADIMOS A LA WEB ELEMENTOS DEL HEADER
    label.appendChild(checkbox);

    label.appendChild(slider);

    toggleDiv.appendChild(label);

    encabezado.appendChild(logoDiv);

    encabezado.appendChild(nav);

    encabezado.appendChild(toggleDiv);
    
    document.body.prepend(encabezado);

    // SEC0
    const seccion0 = document.createElement('section');
    seccion0.id = 'seccion0';

    // ESTILOS Y CREACION DEL BANNER
    const bannerDiv = document.createElement('div');
    bannerDiv.id = 'banner';
    Object.assign(bannerDiv.style, {
        color: 'aliceblue',
        height: '70vh',
        width: '100%',
        backgroundImage: "url('img/Banner de Canva Azul Verde Sutil Degradados Corporativo .png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
    });
    // STILOS DEL BANNER
    const contenidoBanner = document.createElement('div');
    contenidoBanner.id = 'contenidoBanner';
    Object.assign(contenidoBanner.style, {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    });

    // ESTILO PARA EL H1
    const tituloBanner = document.createElement('h1');
    tituloBanner.id = 'tituloBanner';
    tituloBanner.textContent = 'Peligros de la Inteligencia Artificial';
    tituloBanner.style.fontSize = '40px';

    // CONTENEDOR DE LA IMAGEN DEL BANNRE
    const bannerImages = document.createElement('div');
    bannerImages.id = 'bannerImages';
    bannerImages.style.display = 'flex';
    bannerImages.style.alignItems = 'center';
    bannerImages.style.justifyContent = 'center';

    // IMAGEN DEL BANNER
    const botImage = document.createElement('img');
    botImage.id = 'botImage';
    botImage.src = 'img/2002.i039.010_chatbot_messenger_ai_isometric_set-05-removebg-preview.png';
    botImage.alt = '';
    botImage.style.width = '400px';
    botImage.style.animation = 'movimientoSuave 2s infinite alternate ease-in-out';

    // AÑADIMOS A LA APGINA
    bannerImages.appendChild(botImage);

    contenidoBanner.appendChild(tituloBanner);

    contenidoBanner.appendChild(bannerImages);

    bannerDiv.appendChild(contenidoBanner);

    // DIV PARA BOTON
    const botonDiv = document.createElement('div');
    botonDiv.id = 'botonDiv';
    botonDiv.style.width = '100%';
    botonDiv.style.display = 'flex';
    botonDiv.style.alignItems = 'center';
    botonDiv.style.justifyContent = 'center';
    botonDiv.style.marginTop = '4%';

    // ESTILOS Y CONFIG DEL BOTON FLECHA
    const botonFlecha = document.createElement('button');
    botonFlecha.id = 'botonFlecha';
    botonFlecha.style.border = '0';
    botonFlecha.style.backgroundColor = '#28292c00';
    botonFlecha.style.width = '90px';
    botonFlecha.style.height = '90px';
    botonFlecha.style.borderRadius = '50%';
    botonFlecha.style.transition = 'background-color 0.9s';
    botonFlecha.style.display = 'flex';
    botonFlecha.style.alignItems = 'center';
    botonFlecha.style.justifyContent = 'center';

    // PROPIEDADES A / IMG
    const enlaceBoton = document.createElement('a');
    enlaceBoton.href = '#seccion1';
    const flechaImg = document.createElement('img');
    flechaImg.id = 'flechaImg';
    flechaImg.src = 'img/flecha-hacia-abajo.png';
    flechaImg.alt = '';
    flechaImg.style.width = '50px';

    // AAÑADIMOS A LA PAGINA
    enlaceBoton.appendChild(flechaImg);
    botonFlecha.appendChild(enlaceBoton);

    botonDiv.appendChild(botonFlecha);

    seccion0.appendChild(bannerDiv);
    seccion0.appendChild(botonDiv);

    document.body.appendChild(seccion0);

    
    // CREAMOS SECCION
    const seccion1 = document.createElement('section');
    seccion1.id = 'seccion1';

    // CREAMOS DIV INICIO
    const inicioDiv = document.createElement('div');

    inicioDiv.id = 'inicio';
    // ESTILOS
    Object.assign(inicioDiv.style, {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        marginTop: '8%',
        marginBottom: '10%',
    });

    // CONTENEDOR DEL CONTENIDO
    const contenidoDiv = document.createElement('div');
    contenidoDiv.id = 'contenido';
    // ESTILOS
    Object.assign(contenidoDiv.style, {
        marginTop: '0%',
        width: '80%',
        borderRadius: '8px',
        padding: '2%',
    });

    // TITULO HISTORIA

    const tituloHistoria = document.createElement('h1');
    tituloHistoria.id = 'tituloHistoria';
    tituloHistoria.textContent = 'Historia de la Inteligencia Artificial';
    tituloHistoria.style.fontSize = '40px';

    // ESTILOS PARA EL DIV
    const imagenTextoDiv = document.createElement('div');
    imagenTextoDiv.id = 'imagenTexto';
    Object.assign(imagenTextoDiv.style, {
        display: 'flex',
        flexDirection: 'row',
        gap: '5%',
        alignItems: 'center',
        fontSize:'20px',
    });

    // CREAMOS LA IMAGEN 
    const imagenDiv = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.src = 'img/ai-generated-8558430_640.jpg'; 
    imagen.alt = '';
    imagen.style.width = '600px'; 
    imagen.style.borderRadius = '8px'; 

    imagenDiv.appendChild(imagen);


    const textoDiv = document.createElement('div');
    textoDiv.id = 'texto1';

    // CREAMOS EL PARRAFO
    const parrafo = document.createElement('p');
    parrafo.innerHTML = `En 1950, el matemático Alan Turing se hizo una pregunta: "¿Pueden pensar las máquinas?". De
                         hecho, esta simple pregunta transformaría el mundo.

                         El artículo de Alan Turing "Computing Machinery and Intelligence" y el consiguiente "Test de
                         Turing" sentaron las bases de la inteligencia artificial, su visión y sus objetivos.

                         De hecho, la inteligencia artificial pretende responder afirmativamente a la pregunta de
                         Alan Turing. Su objetivo es replicar o simular la inteligencia humana en las máquinas.

                         Se trata de un objetivo ambicioso, que también plantea muchos interrogantes y suscita el
                         debate. Por ello, aún no existe una definición única de inteligencia artificial.

                         La descripción de "máquinas inteligentes" no explica qué es realmente la inteligencia
                         artificial ni qué hace que una máquina sea inteligente.`;
    
    
    // Añadimos los contenidos
    textoDiv.appendChild(parrafo);

    
    imagenTextoDiv.appendChild(imagenDiv);
    imagenTextoDiv.appendChild(textoDiv);

    
    contenidoDiv.appendChild(tituloHistoria);
    contenidoDiv.appendChild(imagenTextoDiv);

    inicioDiv.appendChild(contenidoDiv);
    seccion1.appendChild(inicioDiv);

//    AÑADIMOS LA SECCION
    document.body.appendChild(seccion1);

    const seccion2 = document.createElement('section');
    seccion2.id = 'seccion2';

    // CREAMOS CONTENEDOR
    const contenidoSec2 = document.createElement('div');
    contenidoSec2.id = 'contenidoSec2';
    // HACEMOS LOS ESTILOS DEL CONTENIDO
    Object.assign(contenidoSec2.style, {
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '80%',
    });

    // PONEMOS EN LA APGINA EL TITULO
    const tituloPel = document.createElement('h1');
    tituloPel.id = 'tituloPel';
    // AÑADIMOS EL TITULO
    tituloPel.textContent = 'Peligros de la Inteligencia Artificial';
    

    // CREAMOS LA IMAGEB
    const imgSec2 = document.createElement('img');
    imgSec2.id = 'imgSec2';
    imgSec2.src = 'img/banner-inteligencia-artificial.png'; 
    imgSec2.alt = 'Peligros de la IA';
    imgSec2.style.width = '100%'; 

    // CREEAMOS EL DIV 
    const textoSec2 = document.createElement('div');
    textoSec2.id = 'textoSec2';

    // CREAMOS LOS ARRAYS PARA LOS PARRAFOS DE LOS PRELIGOROS
    const temasPel = [
        { titulo: '1. Falta de transparencia', texto: 'La falta de transparencia en los sistemas de IA, especialmente en los modelos de aprendizaje profundo que pueden ser complejos y difíciles de interpretar, es un problema acuciante. Esta opacidad oscurece los procesos de toma de decisiones y la lógica subyacente de estas tecnologías. Cuando las personas no pueden comprender cómo un sistema de IA llega a sus conclusiones, puede generar desconfianza y resistencia a adoptar estas tecnologías.' },
        { titulo: '2. Prejuicios y discriminación', texto: 'Los sistemas de IA pueden perpetuar o amplificar inadvertidamente los prejuicios sociales debido a datos de entrenamiento sesgados o al diseño algorítmico. Para minimizar la discriminación y garantizar la equidad, es crucial invertir en el desarrollo de algoritmos imparciales y conjuntos de datos de entrenamiento diversos.' },
        { titulo: '3. Preocupación por la privacidad', texto: 'Las tecnologías de IA suelen recopilar y analizar grandes cantidades de datos personales, lo que plantea problemas relacionados con la privacidad y la seguridad de los datos. Para mitigar los riesgos para la privacidad, debemos abogar por una normativa estricta de protección de datos y prácticas seguras de tratamiento de los mismos.' },
        { titulo: '4. Dilemas éticos', texto: 'Inculcar valores morales y éticos a los sistemas de IA, especialmente en contextos de toma de decisiones con consecuencias importantes, supone un reto considerable. Los investigadores y desarrolladores deben dar prioridad a las implicaciones éticas de las tecnologías de IA para evitar impactos sociales negativos.' },
        { titulo: '5. Riesgos para la seguridad', texto: 'A medida que las tecnologías de IA se vuelven cada vez más sofisticadas, también aumentan los riesgos de seguridad asociados a su uso y el potencial de uso indebido. Los piratas informáticos y los actores maliciosos pueden aprovechar el poder de la IA para desarrollar ciberataques más avanzados, eludir las medidas de seguridad y explotar las vulnerabilidades de los sistemas.' }
    ];

// CREAMOS UN FOREACH PARA INTRODICOR LOS LOS PARRAFOS DE H2 Y P
    temasPel.forEach((tema, index) => {
        const h2 = document.createElement('h2');
        h2.textContent = tema.titulo;
        const p = document.createElement('p');
        p.textContent = tema.texto;
        textoSec2.appendChild(h2);
        textoSec2.appendChild(p);
    });

    // INSETAMOS TITULO IMG Y TEXTO 
    contenidoSec2.appendChild(tituloPel);
    contenidoSec2.appendChild(imgSec2);
    contenidoSec2.appendChild(textoSec2);

    //AÑADIMOS EK CONTENEDOR
    seccion2.appendChild(contenidoSec2);

    // AÑADIMOS LA SECCION2
    document.body.appendChild(seccion2);

    // METEMOS ESTILOS AL FOOTER
    const footer = document.createElement('footer');
    Object.assign(footer.style, {
        backgroundColor: 'rgba(231, 231, 231, 0.418)',
        color: '#000000',
        padding: '21px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%'
    });

    // DIV DE DERECHOS
    const textoContenedor = document.createElement('div');
    textoContenedor.id = 'texto-contenedor';
    const p = document.createElement('p');
    p.innerHTML = '&copy; 2024 alegard. Todos los derechos reservados.';

    // INSERTAMOS EN LA WEB 
    textoContenedor.appendChild(p);
    footer.appendChild(textoContenedor);
    
    // CREAMOS EL CONTENEDOR DEL FOOTER
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    const footerImage = document.createElement('img');
    footerImage.style.height = '50px'; 
    imageContainer.appendChild(footerImage);

    footer.appendChild(imageContainer);

//   FINALMENTE AÑADIMOS EL FOOTER
    document.body.appendChild(footer);

});


