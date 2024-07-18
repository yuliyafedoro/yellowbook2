var option_PDFF = {

 

   /* BASIC SETTINGS */  

    openPage: 3,

    height: '100%',

    enableSound: false,

    downloadEnable: false, 

    direction: pdfflip.DIRECTION.LTR,

    autoPlay: false,

    autoPlayStart: false,

    autoPlayDuration: 3000,

    autoEnableOutline: false,

    autoEnableThumbnail: false,



	/* TRANSLATE INTERFACE */  

 

    text: {

      toggleSound: "Sound",

      toggleThumbnails: "Thumbnails",

      toggleOutline: "Contents",

      previousPage: "Previous Page",

      nextPage: "Next Page",

      toggleFullscreen: "Fullscreen",

      zoomIn: "Zoom In",

      zoomOut: "Zoom Out",

      downloadPDFFile: "Download PDF",

      gotoFirstPage: "First Page",

      gotoLastPage: "Last Page",

      play: "AutoPlay On",

      pause: "AutoPlay Off",

      share: "Share"

    },



	/* ADVANCED SETTINGS */  



    hard: "none",

    overwritePDFOutline: true,

    duration: 1000,

    pageMode: pdfflip.PAGE_MODE.AUTO,

    singlePageMode: pdfflip.SINGLE_PAGE_MODE.AUTO,

	transparent: false,

	scrollWheel: false,

    zoomRatio: 1,

	maxTextureSize: 1600,

	backgroundImage: "",

    backgroundColor: "#f4f4f3",

    controlsPosition: pdfflip.CONTROLSPOSITION.BOTTOM,

    allControls: "startPage,altPrev,pageNumber,altNext,play,endPage",

    hideControls: "thumbnail,fullScreen,download,share,outline,zoomIn,zoomOut,sound",



};



var pdfflipLocation = "./pflip/";
